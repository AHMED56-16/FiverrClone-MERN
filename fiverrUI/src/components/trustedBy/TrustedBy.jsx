import React from 'react';
import './TrustedBy.scss';

const TrustedBy = () => {
  return (
    <div className="trustedBy">
      <div className="container">
        <span>Trusted By</span>
        <div className="logos">
          <img src="./images/facebook.png" alt="Facebook" />
          <img src="./images/linkedin.png" alt="LinkedIn" />
          <img src="./images/instagram.png" alt="Instagram" />
          <img src="./images/pinterest.png" alt="Pinterest" />
          <img src="./images/twitter.png" alt="Twitter" />
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
