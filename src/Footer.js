import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h6>Contact Us</h6>
          <p>
            Phone: (123) 456-7890<br />
            Email: info@example.com<br />
            Address: 123 Street, New Delhi
          </p>
        </div>
        <div className="footer-hours">
          <h6>Opening Hours</h6>
          <p>
            Monday - Friday: 8:00 AM - 6:00 PM<br />
            Saturday: 9:00 AM - 4:00 PM<br />
            Sunday: Closed
          </p>
        </div>
        <div className="footer-payment">
          <h6>Accepted Payment Options</h6>
          <ul>
            <li>UPI</li>
            <li>MasterCard</li>
            <li>COD</li>
          </ul>
        </div>
        <div className="footer-social">
          <h6>Follow Us</h6>
          <ul>
            <li>
              <a href="https://www.facebook.com/">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
