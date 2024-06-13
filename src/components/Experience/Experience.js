import React from "react";
import { Container, Row, Col } from "reactstrap";
import './style.css'
import ExperienceCard from "./ExperienceCard";
import experienceItems from "./experience-items";

export default function Experience(){
    return (
        <section className="experience" id="experience">
           <Container>
                <Row>
                    <Col>
                        <h1>EXPERIENCE</h1>
                    </Col>
                </Row>
                {experienceItems.map((items,i) =>{ return <ExperienceCard key={i} id ={i} items={items}/>})}
            </Container>
        </section>
    )
}