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

import FooterArabic from './components/footer_ar'
import './css/home_ar.css'

const HomePageArabic = () => {


    return (
        <div dir='rtl'>
            <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
            
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto arabic-nav">
                            <Nav.Link href="#home">ﺔﻴﺴﻴﺋﺮﻟا ﺔﺤﻔﺼﻟا</Nav.Link>
                            <Nav.Link href="#link">شﺎﻛ يﺰﻳإ ﻦﻋ</Nav.Link>
                            <Nav.Link href="#link">ﺎﻛ يﺰﻳإ ﺔﻈﻔﺤﻣ</Nav.Link>
                            <Nav.Link href="#link">شﺎﻛ يﺰﻳإ رﺎﺠﺗ</Nav.Link>
                            <Nav.Link href="#link">ﺎﻨﻌﻣ ﻞﺻاﻮﺗ</Nav.Link>
                            <Nav.Link href="/" className="language_en">English</Nav.Link>
                            {/* <div className="vertical-divider"></div> */}

                            {/* <NavDropdown className="language" title="language" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Arabic</NavDropdown.Item>
                       
                    </NavDropdown> */}
                        </Nav>
                    <ul>
                        <li><a href="https://www.instagram.com/"><img src={instagram} alt="" /></a></li>
                        <li><a href="https://www.facebook.com/"><img src={facebook} alt="" /></a></li>
                        <li><a href="https://www.linkedin.com/"><img src={linkedin} alt="" /></a></li>       
                    </ul>
                  
                    </Navbar.Collapse>
                </Navbar>
            
               
                <Container>

            
                    <Carousel className="ar-carousel-inner">
                        <Carousel.Item>
                        <Row className="slider-section">

                            <Col md={6} className="text_ar">
                            <Image className="Rectangle-ar" src={Rectangle} alt="" />
                            <h1> ﻪﻴﻧوﺮﺘﻜﻟﺈﻟا ﻚﺘﻈﻔﺤﻣﻪﻴﻣﻮﻴﻟا ﻚﺗﺎﻠﻣﺎﻌﻤﻟ</h1>
                            <p>ﻚﺗﺎﻠﻣﺎﻌﻣ ﻞﻛ ﺎﻬﻴﺑ ﻊﻓﺪﺘﻫ ﻪﻴﻧوﺮﺘﻜﻟا ﻪﻈﻔﺤﻣ شﺎﻛ يﺰﻳاهد ﻞﻛ ﻦﻳﺎﻠﻧوا يﺮﺘﺸﺗ و ﺪﺣ يﺎﻟ سﻮﻠﻓ لﻮﺤﺗ ،ﻪﻴﻣﻮﻴﻟاﻚﻧﺎﻜﻣ ﻲﻓ ﺖﻧا و ﻚﻠﻳﺎﺑﻮﻣ ﻦﻣ</p>
                            <a href="#">ﺪﻳﺰﻤﻟا فﺮﻋ</a>
                        </Col>

                        <Col md={6} className="section1" md={6}>
                        
                            <Image className="dot1-ar" src={dot1} alt="" />
                            
                                <Image className="slide1-mob" src={carousel1} alt="" />

                                <Image className="mob-responsive-1" src={mobres1} alt="" />
              
                        </Col>
                    
                       
                  
                            </Row>

                        </Carousel.Item>
                        <Carousel.Item>
                        <Row className="slider-section">
                            
                             <Col md={6} className="text_ar">
                                    <h1>ﺮﺠﺘﻤﻟا ﻲﻓ ﻊﻓﺪﻟ</h1>
                                    <p>.ﺮﺠﺘﻤﻟا ﻲﻓ ﻊﻴﺒﻟا طﺎﻘﻧ ﻦﻜﻣ دﻮﺟﻮﻟ ﺔﺟﺎﺤﻟا نوﺪﺑ ﺚﻳﺪﺤﻟا ﻢﻟﺎﻌﻟا ﻲﻓ ﺎﻋﻮﻴﺷ ﻊﻓﺪﻟا ﻞﺋﺎﺳو ﺮﺜﻛا لﺎﺒﻘﺘﺳا ﻰﻠﻋ ةرﺪﻘﻟا رﺎﺠﺘﻠﻟ ﺮﻓﻮﺗ نا ﻚﻨﻜﻤﻳ نﺎﻟا </p>
                                    <a href="#">ﺪﻳﺰﻤﻟا فﺮﻋ</a>
                                </Col>

                                <Col className="section1" md={6}>
                                
                                    <Image className="dot2_1-ar" src={dot1} alt="" />
                                    <Image className="dot2_2-ar" src={dot1} alt="" />
                                
                                <Image className="slide2-mob"  src={carousel2} alt="" />
                                <Image className="mob-responsive-2" src={mobres2} alt="" />
                                </Col>
                        
                            </Row>

                        </Carousel.Item>
                
                    </Carousel>
                
                <Row className="section2">
                <Col className="section2-left-ar" md={5} sm={12}>
                            <h2>ﺔﻈﻔﺤﻤﻟا ﻞﻳﺰﻨﺗ </h2>
                            <p> نﺎﺸﻋ ﺎﻬﻣﺪﺨﺘﺳا و ﻚﻠﻳﺎﺑﻮﻣ ﻲﻠﻋ شﺎﻛ يﺰﻳا لﺰﻧنﺎﻣا و ﻪﻟﻮﻬﺴﺑ ﻪﺟﺎﺣ ﻞﻛ ﺎﻬﻴﺑ ﻊﻓﺪﺗ</p>
                        <ul>
                                <li><Image className="" src={button2} alt="" /></li>
                                <li><Image className="" src={button1} alt="" /></li>
                               
                            </ul>
  
                        
                        </Col>
                        <Col className="section2-right" md={7} sm={12}>
                            <Image src={rightimg} alt="" />
                        </Col>
                    
                        
                
                    </Row>

                    <Row className="section3">

                        <Col md={6} sm={12} className="right-column">
                            <ul className="ar-text-container">
                                <li className="d-flex">
                                    <div className="image">
                                        <Image src={icon3a} alt="" />
                                    </div>
                                    <div className="text-ar">
                                        <h5> QR لا دﻮﻛ ماﺪﺨﺘﺳﺎﺑ ﻊﻓﺪﻟ</h5>
                                        <p>QR لا دﻮﻛ ﻖﻳﺮﻃ ﻦﻋ نﺎﻜﻣ يا ﻲﻓ ﻚﻠﻳﺎﺑﻮﻤﺑ ﻊﻓ</p>
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <div className="image">
                                        <Image src={icon3b} alt="" />
                                    </div>
                                    <div className="text-ar">
                                        <h5> سﻮﻠﻓ ﻞﻳﻮﺤﺗ</h5>
                                        <p> ﻪﻈﻔﺤﻣ ﻦﻣ نﺎﻜﻣ يا ﻲﻓ ﺪﺣ يﺄﻟ سﻮﻠﻓ لﻮﺣشﺎﻛ يﺰﻳ</p>
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <div className="image">
                                        <Image src={icon3c} alt="" />
                                    </div>
                                    <div className="text-ar">
                                        <h5>عاﺪﻳﺈﻟا و ﺐﺤﺴﻟ</h5>
                                        <p> ﻲﻟﺂﻟا فﺮﺼﻟا تﺎﻨﻴﻛﺎﻣ ﻦﻣ سﻮﻠﻓ عدا وا ﺐﺤﺳا
شﺎﻛ يﺰﻳا ﻪﻈﻔﺤﻣ ماﺪﺨﺘﺳﺎﺑ  </p>
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <div className="image">
                                        <Image src={icon3d} alt="" />
                                    </div>
                                    <div className="text-ar">
                                        <h5> ﻦﻳﺎﻠﻧوا ﻊﻓﺪﻟا ترﺎﻛ</h5>
                                        <p> يﺰﻳا ﻦﻣ ﻊﻓﺪﻟا ترﺎﻜﺑ ﻦﻳﺎﻠﻧوا ﻊﻓدا و يﺮﺘﺷا
شﺎﻛ </p>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                      
                        <Col md={6} sm={12}>
                            <Image className="shape3" src={shape3} alt="" />
                            <Image className="mob3" src={mob3} alt="" />
                        </Col>
                    </Row>
           
                    <Row className="section4-heading justify-content-center">
                        <Col md={12}>
                            <h2>يازا كﺮﺘﺸﺗ</h2>
                            <p className="sub-heading">ﻪﻴﻟﺎﺘﻟا تاﻮﻄﺨﻟا عﺎﺒﺗﺈﺑ</p>
                        </Col>
                    </Row>
                    <Row className="section4">
                 
                        <div className="bar"></div>

                        <Col className="steps" md={3} sm={12}>
                            <div className="icon">
                                <Image src={icon4a} alt="" />
                            </div>
                            <h5>بﺎﺴﺣ ﺄﺸﻧا</h5>
                            <p> ﻦﻴﺸﻴﻜﻴﻠﺑا ﻲﻠﻋ ﻚﺗﺎﻧﺎﻴﺑ ﻞﺠﺳ
شﺎﻛ يﺰﻳا</p>
                        </Col>
                        <Col className="steps" md={3} sm={12}>
                            <div className="icon">
                                <Image src={icon4b} alt="" />
                            </div>
                            <h5>ﻚﺘﻧﺎﻴﺑ ﻞﻴﺠﺴﺗ ﻞﻤﻛ</h5>
                            <p>ﺎﻠﻣاو شﺎﻛ يﺰﻳﺎﻟ عﺮﻓ بﺮﻗا روز
                            ﻞﻤﻜﺗ نﺎﺸﻋ هرﺎﻤﺜﺘﺳﺎﻟا
ﻞﻴﺠﺴﺘﻟا ﻪﻴﻠﻤﻋ</p>
                        </Col>
                        <Col className="steps" md={3} sm={12}>
                            <div className="icon">
                                <Image src={icon4c} alt="" />
                            </div>
                            <h5>يﺮﺴﻟا كﺰﻣر ﺄﺸﻧا</h5>
                            <p>صﺎﺨﻟا يﺮﺴﻟا كﺰﻣر ﺄﺸﻧا
ﻚﺘﻈﻔﺤﻤﺑ</p>
                        </Col>
                        <Col className="steps" md={3} sm={12}>
                            <div className="icon">
                                <Image src={icon4d} alt="" />
                            </div>
                            <h5>ﻚﺘﻈﻔﺤﻤﺑ ﻊﺘﻤﺘﺳا</h5>
                            <p>  ﻪﺌﻴﻠﻣ ﻪﻈﻔﺤﻤﺑ ﻊﺘﻤﺘﺳا
                            ﻚﻟﺮﻓﻮﺘﻫ ﻲﻠﻟا تﺎﻴﻧﺎﻜﻣﺈﻟﺎﺑ
ﻪﻨﻣآ و ﻪﻠﻬﺳ ﻊﻓد قﺮﻃ</p>
                        </Col>
                    </Row>

                    <Row className="section5-heading justify-content-center">
                        <h2>انئكارش</h2>
                    </Row>
                    <Row className="section5 justify-content-between">
                   
                        <Col className="img1" md={3} sm={6} xs={6}>
                            <div className="partner-logo">
                                <Image src={img4} alt="" />
                            </div>
                        </Col>

                        <Col className="img2" md={3} sm={6} xs={6}>
                            <div className="partner-logo">
                                <Image src={img3} alt="" />
                            </div>
                        </Col>

                        <Col className="img3" md={3} sm={6} xs={6}>
                            <div className="partner-logo">
                                <Image src={img2} alt="" />
                            </div>
                        </Col>

                        <Col className="img4" md={3} sm={6} xs={6}>
                            <div className="partner-logo">
                                <Image src={img1} alt="" />
                            </div>
                        </Col>
                    </Row>
           
           
                </Container>

                <FooterArabic />
            
        </div>
    );
}

export default HomePageArabic;