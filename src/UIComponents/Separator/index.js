import React, { Component } from 'react';
import './index.css';
const Separator = props => {
  return (
    <div className="separator">
      <hr />
      {props.label ? <p>{props.label}</p> : <span />}
      <hr />
    </div>
  );
};

export default Separator;
