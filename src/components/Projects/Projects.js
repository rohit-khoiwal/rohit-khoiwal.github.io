import React from "react"
import { Row, Col, Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projectItems from "./project-items";

import "./style.css";


export default function Projects(){
    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h1>PROJECTS</h1>
                    </Col>
                </Row>
                <Row>
                    {projectItems.map((items,i) =>{ return <ProjectCard key={i} id ={i} items={items}/>})}
                </Row>
            </Container>
        </section>
    )
}