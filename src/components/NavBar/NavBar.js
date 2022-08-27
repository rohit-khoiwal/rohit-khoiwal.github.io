import React from "react";
import "./style.css";
// import logo from "./"

import {Nav, Navbar, Container} from "react-bootstrap";
import {AiOutlineHome, AiOutlineProject} from "react-icons/ai";
import {ImDownload2} from "react-icons/im";
import {GiSkills} from "react-icons/gi";
import {FaBlog, FaMailBulk} from "react-icons/fa";


export default function NavBar(){
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="">
            <img src="https://icons.veryicon.com/png/o/education-technology/blue-gray-solid-blend-icon/artificial-intelligence-5.png" alt="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="align-items-end">
                <Nav.Link href="#home" className="">
                    <AiOutlineHome/>
                    <span>Home</span>
                </Nav.Link>
                <Nav.Link target="_blank" href="https://docs.google.com/document/d/1rsAEOIoJyb8V4a-tRI8r_RuEFUaRZ8U8QTeK0wZ9Co8/export?format=pdf">
                    <ImDownload2/>
                    <span>CV</span>
                </Nav.Link>
                <Nav.Link href="#skills">
                    <GiSkills/>
                    <span>Skills</span>
                </Nav.Link>
                <Nav.Link  href="#">
                    <AiOutlineProject/>
                    <span>Projects</span>
                </Nav.Link>
                <Nav.Link href="#blog">
                    <FaBlog/>
                    <span>Blog</span>
                </Nav.Link>
            </Nav>
            <div className="contact ">
                <a href="#contact" className=""><FaMailBulk/><span>Contact</span></a>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}