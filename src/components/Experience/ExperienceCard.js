import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function ExperienceCard(props) {
    const items = props.items
    return (
        <Row className="experience-item-card">
            <Row className='experience-items-header'>
                <Col lg={1} className="serialNo">
                    <h5>{items.serialNo}.</h5>
                </Col>
                <Col lg={7} className="positionName">
                    <h5>{items.title}</h5>
                </Col>
                <Col lg={4}>
                    <Row>
                        <Col lg={12} className="companyName">
                            <h6>{items.company}, {items.location},</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} className="timePeriod">
                            <h6>{items.period}</h6>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
            {items.description.map((descriptionItems) =>
            (
                <Row className="experience-item-details">
                    <Col lg={1} className="serialNo"></Col>
                    <Col lg={1} className="pointDesign"><li></li></Col>
                    <Col lg={9} className="descriptionItem">
                        <p>{descriptionItems}</p>
                    </Col>
                </Row>
            ))}
        </Row>
    );
}   