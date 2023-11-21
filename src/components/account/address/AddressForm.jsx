// Import All needed dependencies
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";

// Import API Delivery Address
import { createAddress } from "../../../app/api/address";

// Import Validation Rules
import { rules } from "./validation";

// Import Component
import SelectWilayah from './SelectWilayah';

// Address Form receives props from address
const AddressForm = ({ setShowForm, isFormNotShowing }) => {
  // Hooks for managing form 
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues
  } = useForm();
  const allFields = watch();
  const updateValue = (field, value) => setValue(field, value, {
    shouldValidate: true, shouldDirty: true
  });

  // handleSubmit if click button submit of Add Address form
  const onSubmit = async (formData) => {
    let payload = {
      nama: formData.nama,
      detail: formData.detail,
      provinsi: formData.provinsi.label,
      kabupaten: formData.kabupaten.label,
      kecamatan: formData.kecamatan.label,
      kelurahan: formData.kelurahan.label,
    };
    const { data } = await createAddress(payload);
    if (data.error) return;
    if (!data.error) {
      setShowForm(false)
      isFormNotShowing(true)
      Swal.fire({
        title: "Success",
        text: "New Address Added!",
        icon: "success"
      })
    };
  };

  // If choosing provinsi then kabupaten, kecamatan and kelurahan get disabled
  useEffect(() => {
    setValue("kabupaten", null)
    setValue("kecamatan", null)
    setValue("kelurahan", null)
  }, [allFields.provinsi, setValue]);

  // If choosing kabupaten then kecamatan and kelurahan get disabled
  useEffect(() => {
    setValue("kecamatan", null)
    setValue("kelurahan", null)
  }, [allFields.kabupaten, setValue]);

  // If choosing kecamatan then kelurahan get disabled
  useEffect(() => {
    setValue("kelurahan", null)
  }, [allFields.kecamatan, setValue]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-[#149BFC] w-[68rem] ml-4">
        <Row className="ml-10 pt-5">
          <Col md={1} className="h-12 mt-2 w-[6rem] bg-white mr-4 p-3">
            <p className="font-bold">Nama</p>
          </Col>
          <Col md={5}>
            <Form.Group controlId="nama">
              <Form.Control {...register('nama', rules.nama)} type="text" className="bg-white p-3"/>
              <Form.Control.Feedback type="invalid">{errors.nama?.message}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="ml-10 py-5">
          <Col md={6} className="mr-14">
            <div className="bg-white mr-20 p-3 mb-3">
              <p className="font-bold">Detail Alamat</p>
            </div>
            <Form.Group controlId="detail">
              <Form.Control as="textarea" {...register('detail', rules.detail)} style={{resize: "none"}} cols="65" rows="14"/>
              <Form.Control.Feedback type="invalid">{errors.detail?.message}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={5}>
            <Form.Group controlId="provinsi">
              <div className='bg-white mr-20 p-2 mb-3'>
                <p>Provinsi</p>
              </div>
              <SelectWilayah 
                onChange={(option) => updateValue('provinsi', option)}
              />
              <Form.Control.Feedback type="invalid">{errors.provinsi?.message}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="kabupaten">
              <div className='bg-white mr-20 p-2 mb-3'>
                <p>Kabupaten</p>
              </div>
              <SelectWilayah 
                tingkat='kabupaten'
                kodeInduk={getValues().provinsi?.value}
                onChange={(option) => updateValue('kabupaten', option)}
                value={getValues().kabupaten}
              />
              <Form.Control.Feedback type="invalid">{errors.kabupaten?.message}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="kecamatan">
              <div className='bg-white mr-20 p-2 mb-3'>
                <p>Kecamatan</p>
              </div>
              <SelectWilayah 
                tingkat='kecamatan'
                kodeInduk={getValues().kabupaten?.value}
                onChange={(option) => updateValue('kecamatan', option)}
                value={getValues().kecamatan}
              />
              <Form.Control.Feedback type="invalid">{errors.kecamatan?.message}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="kelurahan">
              <div className='bg-white mr-20 p-2 mb-3'>
                <p>Kelurahan</p>
              </div>
              <SelectWilayah 
                tingkat='kelurahan'
                kodeInduk={getValues().kecamatan?.value}
                onChange={(option) => updateValue('kelurahan', option)}
                value={getValues().kelurahan}
              />
              <Form.Control.Feedback type="invalid">{errors.kecamatan?.message}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={1}>
            <button type='submit' className='float-right w-[8rem] focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium text-sm px-5 py-2.5 mb-2 rounded' variant='success'>Simpan</button>
          </Col>
        </Row>
      </div>
    </Form>
  )
}
export default AddressForm;