import React from 'react';
import './Catalog.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function Catalog() {
  return (
    <div id="catalog" className="catalog">
      <h2>Catalog</h2>
      <p>Search by Product</p>
      <Container fluid className="catalog-container">
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {Array.from(Array(8).keys()).map((index) => (
            <Col key={index}>
              <div className="catalog-cell">
                <Image src={`ca${index + 1}.jpg`} className="catalog-image" />
                <div className="text-overlay">Starting from<br />${getStartingPrice(index)}</div>
                <p>{getProductLabel(index)}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

function getStartingPrice(index) {
  const prices = [150, 60, 10, 25, 20, 40, 10, 10];
  return prices[index];
}

function getProductLabel(index) {
  const labels = [
    'Customised Cakes', 'Pastries', 'Cookies', 'Cupcakes',
    'Tarts', 'Macarons', 'Breads', 'Croissants'
  ];
  return labels[index];
}

export default Catalog;
