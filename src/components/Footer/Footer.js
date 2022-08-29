import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer(){
    return (
        <footer className="footer">
            <Container>
                <Row className="justify-content-center">
                    <div className="footer-upperline"></div>
                    <Col xs={7} lg={4} className="footer-content">
                        <img src="https://icons.veryicon.com/png/o/education-technology/blue-gray-solid-blend-icon/artificial-intelligence-5.png" alt=""/>
                        <h1>Rohit Khoiwal</h1>
                        <div className="div-block-22">
                            <div className="social-icon footer-icon">
                                <a className="col-12" href="#sfg">
                                    <span><FaGithub size={28}/></span>
                                </a>
                                <a className="col-12" href="#gsa">
                                    <span><FaLinkedinIn size={28}/></span>
                                </a>
                            </div>
                            <p className="paragraph-3">Copyright © Enterpret Inc. 2022<br/>All Rights Reserved</p>
                        </div>
                    </Col>

                    <Col xs={5} lg={3} className="footer-navigation">
                        <div className="title footer-menu">Navigation</div>
                        <a className="link" href="#home">Home</a>
                        <a className="link" href="https://docs.google.com/document/d/1rsAEOIoJyb8V4a-tRI8r_RuEFUaRZ8U8QTeK0wZ9Co8/export?format=pdf">Resume</a>
                        <a className="link" href="#skills">Skills</a>
                        <a className="link" href="#projects">Projects</a>
                        <a className="link" href="#/">Blog</a>
                    </Col>

                    <Col lg={5} className="footer-contact d-none d-lg-block">
                        <div className="title footer-menu">Contact</div>
                        <div className="row">
                            <Col xs={4}>
                                <div className="link">Email </div>
                                <div className="link">Phone no.</div>
                            </Col>
                            <Col xs={1}>
                                <div className="link">:</div>
                                <div className="link">:</div>
                            </Col>
                            <Col xs={7}>
                                <a className="link" href="#/">khoiwalrohit.16@gmail.com</a>
                                <a className="link" href="#/">+91-73750-55620</a>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}