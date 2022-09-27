import React from "react";
import "./style.css";
// import logo from "./"

import {Nav, Navbar, Container} from "react-bootstrap";
import {AiOutlineHome, AiOutlineProject} from "react-icons/ai";
import {ImDownload2} from "react-icons/im";
import {GiSkills, GiToggles} from "react-icons/gi";
import {FaBlog, FaMailBulk} from "react-icons/fa";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar(){
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="">
            <img src="https://icons.veryicon.com/png/o/education-technology/blue-gray-solid-blend-icon/artificial-intelligence-5.png" alt="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="">
            <GiToggles/>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="align-items-end">
                <Nav.Link href="#home" className="">
                    <AiOutlineHome/>
                    <span>Home</span>
                </Nav.Link>
                {/* https://drive.google.com/uc?id=138fUvrkaYrKgm_dYK-yzlU211MwNC9Af&export=download */}
                <Nav.Link target="_blank" href="https://drive.google.com/file/d/138fUvrkaYrKgm_dYK-yzlU211MwNC9Af/view?usp=sharing">
                    <ImDownload2/>
                    <span>CV</span>
                </Nav.Link>
                <Nav.Link href="#skills">
                    <GiSkills/>
                    <span>Skills</span>
                </Nav.Link>
                <Nav.Link  href="#projects">
                    <AiOutlineProject/>
                    <span>Projects</span>
                </Nav.Link>
                {/* <Nav.Link href="#blog">
                    <FaBlog/>
                    <span>Blog</span>
                </Nav.Link> */}
            </Nav>
            <div className="contactCell">
                <a href="#contact" className=""><FaMailBulk/><span>Contact</span></a>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}