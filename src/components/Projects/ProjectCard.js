import React from 'react';
import { Col, Button, ButtonToolbar } from 'react-bootstrap';
import FadeIn from '../FadeIn';
import {BsArrowUpRight} from "react-icons/bs";

export default function ProjectCard(props) {
    const items = props.items
    return (
        <Col xs={12} md={6} lg={6} className="">
            <FadeIn id={props.id} which={"project"}>
                <div className="project-item row">
                    <Col xs={6} className="d-none d-lg-block">
                        <img alt="" src={items.imgUrl}/>
                    </Col>
                    <Col xs={12} lg={6} className="project-item-body">
                        <h5 className='text-center'>{items.title}</h5>
                        <p>{items.description}</p>
                        <ButtonToolbar className='overflow-hidden'>
                                    {items.codeUrl && 
                                        <div className='projectBtn col-6'>
                                            <Button variant="transparent" className='' target="_blank" href={items.codeUrl}>
                                                <div className='col-6'>Source</div>
                                                <div className='col-6 justify-content-end'><BsArrowUpRight /></div>
                                            </Button>
                                            <div className='underline'></div>
                                        </div>
                                    }
                                    {items.vizUrl && 
                                        <div className='projectBtn col-6'>
                                            <Button variant="transparent" className='' target="_blank" href={items.codeUrl}>
                                                <div className='col-6'>Visualize</div>
                                                <div className='col-6 justify-content-end'><BsArrowUpRight/></div>
                                            </Button>
                                            <div className='underline'></div>
                                        </div>
                                    }
                        </ButtonToolbar>
                    </Col>

                </div>
            </FadeIn>
        </Col>
    );
}   