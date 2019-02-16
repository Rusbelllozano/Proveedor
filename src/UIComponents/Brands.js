import React, { Component } from 'react';

const Brands = props => {
  const listItems = props.brands.map(brand => (
    <li className="brands__item">
      <img src={brand.url} className="brands__item__img" />
    </li>
  ));

  return <ul className="brands__list">{listItems}</ul>;
};

export default Brands;
