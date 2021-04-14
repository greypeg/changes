import React, {useState} from 'react'
import './Navbar.css'
import logoe from '../images/logoe.png';
import {Container, Row, Col} from 'react-bootstrap'


function Navbar() {
    const[showLinks, setShowLinks]= useState(false)
    return (
        <Container fluid className="Navbar">
            <Row>
                <Col lg={1}></Col>
                <Col lg={2}  md={3} sm={3} className="leftSide">
                    <a href="/">
                        <img src={logoe} alt="Logo" className="logo"/>
                    </a>
                </Col>
                <Col lg={3} md={3} sm={3} xs={8}className="centerSide">
                    <input type="search" placeholder="  Search..."></input>
                    <span className="iconify" data-icon="bx:bx-search" data-inline="false"></span>
                </Col>
                <Col lg={6} md={6} sm={6} xs={1}className="rightSide links" id={showLinks ? "hidden" : ""}>
                    <Row>
                        <Col lg={true} md={true} sm={true} className="">
                            <a href="/home">Home</a>
                        </Col>
                        <Col lg={true} md={true} sm={true} className="">
                            <a href="/aboutus" style={{marginLeft: '-12%'}}>About</a>
                        </Col>
                        <Col lg={true} md={true} sm={true} className="">
                            <a href="/contact">Contact</a>
                        </Col>
                        <Col xs={true}><button onClick={()=>setShowLinks(!showLinks)}>open</button></Col>
                    
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar
