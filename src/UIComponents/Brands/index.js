import React, { Component } from 'react';
import "./index.css"
const Brands = props => {
  const listItems = props.brands.map((brand, index) => (
    <li className="brands__item" key={`brand${index}`}>
      <img src={brand.url} className="brands__item__img" />
    </li>
  ));

  return <ul className="brands__list">{listItems}</ul>;
};

export default Brands;
