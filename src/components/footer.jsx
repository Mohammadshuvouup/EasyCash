import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../asset/flogo.png'
import linkedin from '../asset/2linkedin.svg'
import facebook from '../asset/001-facebook.svg'
import instagram from '../asset/005-instagram.svg'
import '../css/footer.css'

const Footer = () => {
    return (
        <Container className="footer-container-en" fluid>
        <Row>
          <Col className="footer-logo" md={3} >
            <Image src={logo} alt=""/>
          </Col>
          <Col md={3} xs={4}>
            <ul>QUICK LINKS
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of use</a></li>
            </ul>
          </Col>
          <Col md={3} xs={4}>
            <ul>COMPANY
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={3} xs={4}>
            <ul>SERVICES
              <li><a href="#">EasyCash Wallet</a></li>
              <li><a href="#">Merchant app</a></li>
            </ul>
          </Col>
        </Row>

        <Row className="copy-right-footer align-items-center">
          <Col md={6}>
            <footer>&copy; Copyright 2020 Easy Cash - All Rights Reserved</footer>
          </Col>
            
          <Col md={6}>
            <ul> Follow us on:
              <li><a href=""><Image src={linkedin} alt=""/></a></li>
              <li><a href=""><Image src={facebook} alt=""/></a></li>
              <li><a href=""><Image src={instagram} alt=""/></a></li>
            </ul>
          </Col>

        </Row>

      </Container>
    );
}

export default Footer;