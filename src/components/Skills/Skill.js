import React, { useState, useRef} from "react";
import { Col, Collapse, Container, Row } from "react-bootstrap";
import GridContainer from "./GridContainer";
import skills_items from "./skills_item.js";
import './style.css'

export default function Skills(){
    const btnBackground = "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)";
    const [activeStates, setActive] = useState({
        "overall":true,
        "proglang":false,
        "libs":false,
        "tools":false
    })
    function handle(event){
        const {id} = event.target
        setActive(prevStates=>{

            var newStates = {}
            for(var key in prevStates){
                if (key === id) newStates[key] = true;
                else{
                    newStates[key] = false;
                }
            }
            return newStates
        })
    }
    const [ht, setHeight] = useState(0);
    const domRef = useRef();
    React.useEffect(() => {
      const observer = new ResizeObserver(entries => {
        setHeight(entries[0].contentRect.height + 100)
      });
      observer.observe(domRef.current);
      return () => observer.disconnect();
    }, []);

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col className="">
                        <div className="cta-gradient-blur" style={{height:ht}}></div>
                        <div className="skill-bx" style={{top: -ht-50}} ref={domRef}>
                            <h1>SKILLS</h1>
                            <Row className="align-items-center">
                                <Col xs={12} md={6} lg={3}>
                                    <button id="overall" className="skill-box" onClick={handle}
                                        style={{background: activeStates["overall"]? btnBackground: ""}}>
                                        Overall
                                    </button>
                                </Col>
                                <Col xs={12} md={6} lg={3}>
                                    <button id="proglang" className="skill-box" onClick={handle}
                                        style={{background: activeStates["proglang"]? btnBackground: ""}}>
                                        PROGRAMMING LANGUAGES
                                    </button>
                                </Col>
                                <Col xs={12} md={6} lg={3}>
                                    <button id="libs" className="skill-box" onClick={handle}
                                    style={{background: activeStates["libs"]? btnBackground: ""}}>
                                        LIBRARIES{" & "}FRAMEWORKS
                                    </button>
                                </Col>
                                <Col xs={12} md={6} lg={3}>
                                    <button id="tools" className="skill-box" onClick={handle}
                                    style={{background: activeStates["tools"]? btnBackground: ""}}>
                                        TOOLS{" &"}<br/>PLATFORMS
                                    </button>
                                </Col>
                            </Row>
                            <Collapse in={activeStates["overall"]} >
                                <Row>
                                    <GridContainer items={skills_items["overall"]} />
                                </Row>
                            </Collapse>
                            <Collapse in={activeStates["proglang"]}>
                                <Row>
                                    <GridContainer items={skills_items["proglang"]} />
                                </Row>
                            </Collapse>
                            <Collapse in={activeStates["libs"]}>
                                <Row>
                                    <GridContainer items={skills_items["libs"]} />
                                </Row>
                            </Collapse>
                            <Collapse in={activeStates["tools"]}>
                                <Row>
                                    <GridContainer items={skills_items["tools"]} />
                                </Row>
                            </Collapse>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}