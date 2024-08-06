import React from 'react';

const GlowCard = ({ children, identifier }) => {
  return (
    <div className={`glow_card ${identifier}`}>
      {children}
    </div>
  );
};

export default GlowCard;
