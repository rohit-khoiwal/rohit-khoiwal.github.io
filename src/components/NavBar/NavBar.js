import React from "react";
import "./style.css";

import {Nav, Navbar, Container, Button} from "react-bootstrap";
import {AiOutlineHome, AiOutlineProject} from "react-icons/ai";
import {ImDownload2} from "react-icons/im";
import {GiSkills} from "react-icons/gi";
import {FaBlog, FaMailBulk} from "react-icons/fa";


export default function NavBar(){
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Rohit Khoiwal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="align-items-end">
                <Nav.Link href="#home" className="">
                    <AiOutlineHome/>
                    <span>Home</span>
                </Nav.Link>
                <Nav.Link href="#cv">
                    <ImDownload2/>
                    <span>CV</span>
                </Nav.Link>
                <Nav.Link href="#skills">
                    <GiSkills/>
                    <span>Skills</span>
                </Nav.Link>
                <Nav.Link href="#skills">
                    <AiOutlineProject/>
                    <span>Projects</span>
                </Nav.Link>
                <Nav.Link href="#blog">
                    <FaBlog/>
                    <span>Blog</span>
                </Nav.Link>
            </Nav>
            <a href="#" className="contact align-self-end"><FaMailBulk/><span>Contact</span></a>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}