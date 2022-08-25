import React from "react";
import { Container, Row, Col } from "reactstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import TextFader from "./TextFader";
import './style.css'


export default function Home(){
    return (
        <section className="home" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={2} md={1} xl={1}>
                    <div className="social-icon">
                        <a className="col-12" href="#sfg">
                            <span><FaGithub size={28}/></span>
                        </a>
                        <a className="col-12" href="#gsa">
                            <span><FaLinkedinIn size={28}/></span>
                        </a>
                    </div>
                    </Col>
                    <Col xs={10} md={11} xl={7}>
                        <span className="tagline">Welcome to my Portfolio website</span>
                        <h1>
                            Hi! I'm Rohit Khoiwal{"\n"}
                            <span className="wrap"><TextFader /></span>  
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}