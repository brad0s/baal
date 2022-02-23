import React from 'react';

const RoundButton = ({ text, bgColor, link = '#' }) => {
  return (
    <a className='roundButton' style={{ backgroundColor: bgColor }} href={link}>
      {text}
    </a>
  );
};

export default RoundButton;
