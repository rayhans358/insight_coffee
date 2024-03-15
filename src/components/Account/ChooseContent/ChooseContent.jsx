import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faMapLocationDot, faReceipt, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import "./chooseContentStyling.css"
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../app/api/auth';

function ChooseContent({ setSelectedPage }) {
  const navigate = useNavigate();

  function handleNavigation(route) {
    setSelectedPage(route);
    navigate(`/account/${route}`);
  };

  async function handleLogout() {
    try {
      await logoutUser();
      navigate('/account/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <section id="choosecontent-container" className="choosecontent-container">
      <div className="fill-choosecontent">
        <div className={`icon-content ${setSelectedPage === 'dashboard' && 'active'}`} onClick={() => handleNavigation('dashboard')}>
          <FontAwesomeIcon icon={faHouseUser} className="icons" />
          <h3>Dashboard</h3>
        </div>
        <div className={`icon-content ${setSelectedPage === 'order-list' && 'active'}`} onClick={() => handleNavigation('order-list')}>
          <FontAwesomeIcon icon={faReceipt} className="icons" />
          <h3>Pemesanan</h3>
        </div>
        <div className={`icon-content ${setSelectedPage === 'address' && 'active'}`} onClick={() => handleNavigation('address')}>
          <FontAwesomeIcon icon={faMapLocationDot} className="icons" />
          <h3>Alamat</h3>
        </div>
        <div className="icon-content" onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightFromBracket} className="icons" />
          <h3>Log Out</h3>
        </div>
      </div>
    </section>
  );
};

export default ChooseContent;