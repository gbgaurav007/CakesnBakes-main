import React from 'react';
import './About.css'; 
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function About() {
  return (
    <div id="about" className="about">
      <Container className="ex1">
        <Row>
          <Col md={4} className="about-cell">
            <Image src="a1.avif" className="about-image" />
          </Col>
          <Col md={4} className="about-cell">
            <h2>From the Admin</h2>
            <p>
                Welcome to Cakes'n'Bakes, where we turn moments into memories with delectable creations.
                Founded with a passion for baking, we pour heart and soul into every product we offer. From
                classic confectionaries to innovative delights, our team ensures each bite is an exquisite
                experience. With a commitment to quality ingredients and a sprinkle of creativity, we aim to
                make your celebrations truly special. Join us in this sweet journey to and let's create
                something extraordinary together!
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="about-cell">
            <h2>Our Products</h2>
            <p>
                At Cakes'n'Bakes, we offer a delightful array of freshly baked products to satisy every palate. 
                From classic breads to creative cakes, and everything in between, our diverse range includes
                customised cakes, pastries, artisan breads, cookies and brownies, cupcakes and muffins, pies,
                tarts and also vegan and gluten-free options. Each product is crafted with love, using the 
                highest quality ingredients, ensuring that every bite is moment of a pure bliss. Browse our 
                catalog and let us bring some sweetness to your life!
            </p>
          </Col>
          <Col md={4} className="about-cell">
            <Image src="a2.avif" className="about-image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;



