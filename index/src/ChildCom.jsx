import React from 'react';
import './ChildCom.css';

const Child = (props) => {
  return (
    <div className={props.style}> {/* Use the style class for the background image */}
      <div className={`${props.desc} ${props.desc1}`}>
        <h1 className={props.heading}>{props.name}</h1>
        <p className={props.para}>{props.head}</p>
        <button className={props.but}>{props.button}</button>
      </div>
    </div>
  );
};

export default Child;
