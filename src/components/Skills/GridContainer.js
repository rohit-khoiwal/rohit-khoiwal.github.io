import React from "react";
import { Col } from "react-bootstrap";
import FadeIn from "../FadeIn";

export default function GridContainer(props) {
    const items = props.items;
    return (
        <>
            {items.map(({label, url}, i) => {
                return (
                    <Col key= {i} xs={6} md={3} lg={2}>
                        <FadeIn><img className="skill-img" src={url} alt={""}/><br/>{label}</FadeIn>
                    </Col>
                )
            })}
        </>
    )
  }
  