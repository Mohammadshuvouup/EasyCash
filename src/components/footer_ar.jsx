import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../asset/flogo.png'
import linkedin from '../asset/2linkedin.svg'
import facebook from '../asset/001-facebook.svg'
import instagram from '../asset/005-instagram.svg'
import '../css/footer_ar.css'

const FooterArabic = () => {
    return (
        <Container className="footer-container footer-arabic" fluid>
        <Row>
          <Col className="footer-logo" md={3}>
            <Image src={logo} alt=""/>
          </Col>
          <Col md={3} xs={4}>
            <ul>ديزملا
              <li><a href="#">تﺎﻟﺎﻘﻣ</a></li>
              <li><a href="#">ﻪﻴﺻﻮﺼﺨﻟا ﻪﺳﺎﻴﺳ</a></li>
              <li><a href="#">ماﺪﺨﺘﺳﺈﻟا طوﺮﺷ</a></li>
            </ul>
          </Col>
          <Col md={3} xs={4}>
            <ul> شﺎﻛ يﺰﻳ
              <li><a href="#"> شﺎﻛ يﺰﻳا</a></li>
              <li><a href="#"> ﻒﺋﺎﻇو</a></li>
              <li><a href="#">ﺎﻨﺑ ﻞﺼﺗا</a></li>
            </ul>
          </Col>
          <Col md={3} xs={4}>
            <ul> شﺎﻛ يﺰﻳا
              <li><a href="#"> شﺎﻛ يﺰﻳا ﻦﻋ
ﻒﺋﺎﻇو</a></li>
              <li><a href="#">ﺎﻨﺑ ﻞﺼﺗا</a></li>
            </ul>
          </Col>
        </Row>

        <Row className="copy-right-footer-ar align-items-center">
          <Col md={6}>
            <footer>&copy; 2021 © ﺔﻇﻮﻔﺤﻣ قﻮﻘﺤﻟا ﻊﻴﻤﺟ</footer>
          </Col>
            
          <Col md={6}>
            <ul> <span>:ﻲﻠﻋ ﺎﻨﻌﺒﺗا
            </span>
              <li><a href=""><Image src={instagram} alt=""/></a></li>
              <li><a href=""><Image src={facebook} alt="" /></a></li>
              <li><a href=""><Image src={linkedin} alt="" /></a></li>
             
            </ul>
          </Col>

        </Row>

      </Container>
    );
}

export default FooterArabic;