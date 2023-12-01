import React, { useEffect, useRef } from 'react';
import './Bakery.css';
import Image from 'react-bootstrap/Image';

const Bakery = ({ name, location, rating, image, desc }) => {

  return (
    <div className="bakery-container">
      <div className="xyz"><img src={image} alt={name} className="bakery-image" /></div>
      <div className="abc">
      <h4 className="bakery-name">{name}</h4>
      <Image src="star.jpg" className="star"/><span><h6 className="bakery-rate">{rating}</h6></span>
      <p className="bakery-desc">{desc}</p>
      <p className="bakery-location">{location}</p>
      </div>
    </div>
  );
};

export default Bakery;


