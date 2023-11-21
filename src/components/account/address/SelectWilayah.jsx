// Import All needed dependencies
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

export default function SelectWilayah({tingkat, kodeInduk, onChange, value}) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    axios
      .get(`https://insight-coffee-be.vercel.app/api/${tingkat}?kode_induk=${kodeInduk}`)
      .then(({ data }) => setData(data))
      .finally((_) => setIsFetching(false));
  }, [kodeInduk,tingkat]);

  return (
    <div className="w-[27rem]">
      <Form.Select 
        className="form-select"
        onChange={onChange}
        value={value}
        disabled={isFetching || !data.length}
      >
        {
          isFetching && <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              />
              Loading...
          </Button>
        }
        {!isFetching && data.map((wilayah) => (
          <option key={wilayah.kode} value={wilayah.kode}>
            {wilayah.nama}
          </option>
        ))}
      </Form.Select>
    </div>
  )
};

// Prop Types of select wilayah
SelectWilayah.propTypes = {
  tingkat: PropTypes.oneOf(["provinsi", "kabupaten", "kecamatan", "kelurahan"]),
  kodeInduk: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

SelectWilayah.defaultProps = {
  tingkat: "provinsi"
};