import React from 'react';
import './FizzyButton.scss';

const FizzyButton = ({ text, href }) => {
  return (
    <a href={href} className="button">
      <input id="button" type="checkbox" />
      <label htmlFor="button">
        <div className="button_inner q">
          <i className="l ion-log-in"></i>
          <span className="t">{text}</span>
          <span className="tick ion-checkmark-round"></span>
          <div className="b_l_quad">
            {[...Array(52)].map((_, i) => (
              <div key={i} className="button_spots"></div>
            ))}
          </div>
        </div>
      </label>
    </a>
  );
};

export default FizzyButton;