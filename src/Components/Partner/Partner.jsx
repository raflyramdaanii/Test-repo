import React from 'react';
import './Partner.css';
import tsurumiLogo from '../../assets/tsurumi.png';
import ebaraLogo from '../../assets/ebara.png';
import aliaLogo from '../../assets/alia.jpg';
import showaLogo from '../../assets/showa.png';
import capitolOilLogo from '../../assets/capitol.png';

const Partner = () => {
  const distributors = [
    {
      name: 'TSURUMI',
      logo: tsurumiLogo
    },
    {
      name: 'EBARA',
      logo: ebaraLogo
    },
    {
      name: 'ALIA',
      logo: aliaLogo
    },
    {
      name: 'SHOWA',
      logo: showaLogo
    },
    {
      name: 'CAPITOL OIL',
      logo: capitolOilLogo
    }
  ];

  return (
    <div className="partner-section">
      <h2 className="section-title">Our Distributors</h2>
      <div className="logo-container">
        {distributors.map((distributor, index) => (
          <div className="logo-item" key={index}>
            <img src={distributor.logo} alt={`${distributor.name} logo`} className="distributor-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
