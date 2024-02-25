import React from 'react';

// import "./chooseContentStyling.css";
import "./chooseContentStyling.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faMapLocationDot, faReceipt, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function ChooseContent() {
  return (
    <section id="choosecontent-container" className="choosecontent-container">
      <div className="fill-choosecontent">
        <div className="icon-content">
          <FontAwesomeIcon icon={faHouseUser} className="icons" />
          <h3>Dashboard</h3>
        </div>
        <div className="icon-content">
          <FontAwesomeIcon icon={faReceipt} className="icons" />
          <h3>Pemesanan</h3>
        </div>
        <div className="icon-content">
          <FontAwesomeIcon icon={faMapLocationDot} className="icons" />
          <h3>Alamat</h3>
        </div>
        <div className="icon-content">
          <FontAwesomeIcon icon={faRightFromBracket} className="icons" />
          <h3>Log Out</h3>
        </div>
      </div>
    </section>
  );
};

export default ChooseContent;