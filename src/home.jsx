import React from 'react';
import {Container,Row,Col,Image,Carousel,Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './asset/logo.svg'
import linkedin from './asset/icon-inkedin.svg'
import facebook from './asset/icon-facebook.svg'
import instagram from './asset/icon-instagram.svg'
import carousel1 from './asset/carousel1.svg'
import carousel2 from './asset/carousel2.svg'

import dot1 from './asset/dot1.svg'
import button1 from './asset/button1.svg'
import button2 from './asset/button2.svg'
import Rectangle from './asset/Rectangle.png'
import rightimg from './asset/section2-rightimg.svg'
import mob3 from './asset/section3.png'
import shape3 from './asset/shape3.svg'
import icon3a from './asset/icon3a.svg'
import icon3b from './asset/icon3b.svg'
import icon3c from './asset/icon3c.svg'
import icon3d from './asset/icon3d.svg'
import img1 from './asset/section5-1.png'
import img2 from './asset/section5-2.png'
import img3 from './asset/section5-3.png'
import img4 from './asset/section5-4.png'
import icon4a from './asset/icon4-1.png'
import icon4b from './asset/icon4-2.png'
import icon4c from './asset/icon4-3.png'
import icon4d from './asset/icon4-4.png'
import line from './asset/section4-line.png'
import mobres1 from './asset/mobr1.png'
import mobres2 from './asset/mobr2.png'


import Footer from './components/footer'
import './css/home.css'
// import Dir from './lang_dir'

const HomePage = () => {

    const directionVariable = 'ltr';

    return (
        <div>
        {/* <Dir direction={ directionVariable }> */}
            <Navbar expand="lg">
                <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link  href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About us</Nav.Link>
                        <Nav.Link href="#link">EasyCash Wallet</Nav.Link>
                        <Nav.Link href="#link">Merchants</Nav.Link>
                        <Nav.Link href="#link">Contact us</Nav.Link>

                        <Nav.Link href="/home_ar"  className="language">يبرع</Nav.Link>
                        {/* <div className="vertical-divider"></div> */}

                    {/* <NavDropdown className="language" title="language" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Arabic</NavDropdown.Item>
                       
                    </NavDropdown> */}
                    </Nav>
                    <ul>
                        <li><a href="https://www.linkedin.com/"><img src={linkedin} alt="" /></a></li>
                        <li><a href="https://www.facebook.com/"><img src={facebook} alt="" /></a></li>
                        <li><a href="https://www.instagram.com/"><img src={instagram} alt="" /></a></li>   
                    </ul>
                  
                </Navbar.Collapse>
            </Navbar>
            
          
            <Container>

            
                <Carousel>
                    <Carousel.Item>
                        <Row className="slider-section">
                    
                            <Col md={6} className="text">
                                <h1>Your digital wallet for everyday Payments</h1>
                                <p>EasyCash is your digital wallet for seamless payment experience</p>
                                <a href="#">Learn more</a>
                            </Col>
                            <Col md={6} className="section1" md={6}>
                                
                            <Image  className="Rectangle" src={Rectangle} alt="" />
                            <Image  className="dot1" src={dot1} alt="" />
                                
                                <Image className="slide1-mob" src={carousel1} alt="" />
                                <Image  className="mob-responsive-1" src={mobres1} akt=""/>

                        </Col>
                        </Row>

                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="slider-section">
                    
                            <Col md={6}>
                                <h1>In-store Payments</h1>
                                <p>Now merchants has the ability to accept the most popular payment methods in the physical world without the requirement of a POS terminal </p>
                                <a href="#">Learn more</a>
                            </Col>
                            <Col className="section1" md={6}>
                                
                                <Image className="dot2_1" src={dot1} alt="" />
                                <Image  className="dot2_2" src={dot1} alt="" />
                                
                                <Image className="slide2-mob" src={carousel2} alt="" />
                               <Image className="mob-responsive-2" src={mobres2} akt=""/>

                        </Col>
                        </Row>

                    </Carousel.Item>
                
                </Carousel>
                
                <Row className="section2">
                   <Col className="section2-left" md={5} sm={12}>
                        <h2>Download & Pay </h2>
                        <p>Pay on the go with EasyCash, enjoy simplicity & the ease wherever you are.</p>
                        <ul>
                            <li><Image className="button1" src={button1} alt="" /></li>
                            <li><Image className="button2" src={button2} alt="" /></li>
                        </ul>
  
                        
                    </Col>
                    <Col className="section2-right" md={7} sm={12}>
                        <Image src={rightimg}alt=""/>
                    </Col>
                </Row>

                <Row className="section3">
                    <Col md={6} sm={12}>
                    <Image className="shape3" src={shape3} alt=""/>
                    <Image className="mob3" src={mob3} alt=""/>
                    </Col>

                    <Col md={6} sm={12} className="right-column">
                    <ul>
                        <li className="d-flex">
                        <div className="image">
                            <Image src={icon3a} alt=""/>
                        </div>
                        <div className="text">
                            <h5>QR Payments</h5>
                            <p>Pay via QR in thousands of Easycash merchants.</p>
                        </div>
                        </li>
                        <li className="d-flex">
                        <div className="image">
                            <Image src={icon3b} alt=""/>
                        </div>
                        <div className="text">
                            <h5>Transfer Money</h5>
                            <p>Send and receive money to all mobile wallets across Egypt.</p>
                        </div>
                        </li>
                        <li className="d-flex">
                        <div className="image">
                            <Image src={icon3c} alt=""/>
                        </div>
                        <div className="text">
                            <h5>Top up & Withdraw </h5>
                            <p>Cash in & cash out securely and conveniently for everyday usage. </p>
                        </div>
                        </li>
                        <li className="d-flex">
                        <div className="image">
                        <Image src={icon3d} alt=""/>
                        </div>
                        <div className="text">
                        <h5>Online Card</h5>
                        <p>Purchase online using the virtual online cards. </p>
                        </div>
                    </li>
                    </ul>
                    </Col>
               </Row>
           
               <Row className="section4-heading justify-content-center">
                    <Col md={12}>
                    <h2>How to subscribe</h2>
                    <p className="sub-heading">You can register through the following steps</p>
                    </Col>
                </Row>
                <Row className="section4">
                 
                    <div className="bar"></div>

                    <Col className="steps" md={3} sm={12}>
                        <div className="icon">
                            <Image src={icon4a} alt=""/>
                        </div>
                        <h5>Create an account</h5>
                        <p>Register your data through EasyCash app</p>
                    </Col>
                    <Col className="steps" md={3} sm={12}>
                        <div className="icon">
                            <Image src={icon4b} alt=""/>
                        </div>
                        <h5>Fill application</h5>
                        <p>Visit one of our locations to verify your account</p>
                    </Col>
                    <Col className="steps" md={3} sm={12}>
                        <div className="icon">
                            <Image src={icon4c} alt=""/>
                        </div>
                        <h5>Create your PIN</h5>
                        <p>Create your PIN after receiving the approval SMS</p>
                    </Col>
                    <Col className="steps" md={3} sm={12}>
                        <div className="icon">
                            <Image src={icon4d} alt=""/>
                        </div>
                        <h5>Enjoy the app</h5>
                        <p>Start enjoying with EasyCash unlimited features</p>
                    </Col>
                </Row>

                <Row className="section5-heading justify-content-center">
                <h2>Our partners</h2>
                </Row>
                <Row className="section5 justify-content-between">
                   
                    <Col className="img1" md={3} sm={12} xs={6}>
                        <div className="partner-logo">
                          <Image src={img1}alt=""/>
                        </div>
                    </Col>

                    <Col className="img2" md={3} sm={12} xs={6}>
                       <div className="partner-logo">
                            <Image src={img2} alt="" />
                        </div>
                    </Col>

                    <Col className="img3" md={3} sm={12} xs={6}>
                    <div className="partner-logo">
                            <Image src={img3} alt="" />
                            </div>
                    </Col>

                    <Col className="img4" md={3} sm={12}xs={6}>
                    <div className="partner-logo">
                            <Image src={img4} alt="" />
                            </div>
                    </Col>
                </Row>
           
           
            </Container>

        <Footer/>
            


            {/* </Dir> */}
            </div>



        
    );
}

export default HomePage;