import React from "react";
import { Container, Row, Col } from "reactstrap";
// import { ArrowRightCircle } from "react-bootstrap-icons";
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
                        I'm an undergraduate student in my final year at Rajasthan Technical University in Kota.
                        I've been studying machine learning for more than two years and am eager to learn more about it by applying the techniques to a various use cases.
                        <br/><br/>
                        Recently, my first research paper has been approved for publication in ACM BuildSys. It is the most significant and challenging work I have completed during my summer internship.
                        Thank you to all the other authors (
                                                            <a href="https://www.linkedin.com/in/hetvi-shastri/?trk=public_profile_project_contributor-image&originalSubdomain=in">Hetvi Shastri</a>, 
                                                            <a href="https://www.linkedin.com/in/vibhuti-bansal-14414a197/?originalSubdomain=in"> Vibhuti Bansal</a>, 
                                                            <a href="https://www.linkedin.com/in/haikoo-khandor/"> Haikoo Khandor</a>,
                                                            and especially 
                                                            <a href="https://nipunbatra.github.io/"> Dr. Nipun Batra</a>
                                                        ).
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}