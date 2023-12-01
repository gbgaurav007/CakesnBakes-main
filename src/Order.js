import React, { useState } from 'react';
import './Order.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function Order() {
  const [Data, setData] = useState({
    name: '',
    contact: '',
    address: '',
    bakery: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({...Data, [name]: value,});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thankyou for successfully placing an order!');
  };

  const bakeryOptions = ['Nik Bakers', 'Bakers Lounge', 'OvenFresh', 'Bakers Oven', 'Cheesecake and co.', 'Winni Cakes', 'Bakingo', 'Belgian Waffle', 'The Crown Patisserie', 'Super Donuts'];

  return (
    <div id="order" className="order">
      <Container>
        <h2>Make an Order</h2><br/>
        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Row>
              <Col>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your Name..."
                  value={Data.name}
                  onChange={handleChange}
                />
              </Form.Group>
              </Col>
              <Col>
              <Form.Group>
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type="text"
                  name="contact"
                  placeholder="Enter your Contact No..."
                  value={Data.contact}
                  onChange={handleChange}
                />
              </Form.Group>
              </Col>
              </Row><br/>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Enter your Address..."
                  value={Data.address}
                  onChange={handleChange}
                />
              </Form.Group><br/>
              <Form.Group>
                <Form.Label>Name of Bakery</Form.Label>
                <Form.Control
                  as="select"
                  name="bakery"
                  value={Data.bakery}
                  onChange={handleChange}
                >
                <option value="">-- Select a Bakery --</option>
                  {bakeryOptions.map((bakery, index) => (
                    <option key={index} value={bakery}>
                      {bakery}
                    </option>
                  ))}</Form.Control>
              </Form.Group><br/>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  placeholder="Your Customised Order..."
                  value={Data.message}
                  onChange={handleChange}
                />
              </Form.Group><br/>
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
          <Image src="o1.png" className="oimg"/>
        </Row><br/>
        <Row>
          <Col>
          <h2>Location</h2>
          <iframe
              src={`https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d51559.27578300563!2d76.6833836254811!3d30.717555159820634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbakery!5e0!3m2!1sen!2sin!4v1698055427739!5m2!1sen!2sin`}
              width="100%"
              height="400"
              style={{border: 0}}
              allowfullscreen
          ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Order;
