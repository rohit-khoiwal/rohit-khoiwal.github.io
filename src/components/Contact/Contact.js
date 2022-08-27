import { faCircleNotch, faThumbsUp, faBomb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import ReactiveButton from "reactive-button";
import {GiClick} from "react-icons/gi";
import emailjs from "@emailjs/browser";

import "./style.css";

export default function Contact(){
  const ref = useRef();
  const defaultFormDetails = {
    fullname:"",
    company:"",
    email:"",
    phone:"",
    subject:"",
    message:""
  }
  const [formDetails, setFormDetails] = useState(defaultFormDetails);
  const [state, setState] = useState('idle');
  
  function handleUpdate(event){
    setFormDetails(prevFormDetails=>{
      return {
        ...prevFormDetails,
        [event.target.name] : event.target.value
      }
    })
  }
  function handleSubmit(event){
    event.preventDefault()
    setState('loading');
    emailjs.sendForm("service_d5x7rco", "template_isg2t0t", ref.current, "AwqPftIoOyaao9vJh").then(
      (result) => { 
        setState('success')
        setTimeout(() =>{
              setState('idle')
        }, 2000)
        console.log(result.text);
      },
      (error) => {
        setState('error')
        setTimeout(() =>{
          setState('idle')
        }, 1000)
        console.log(error.text);
      }
    );
  }

  return (
    <section className="contact" id="contact">
        <Container>
          <Row>
            <Col className="contact-box col-10 offset-1">
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit} ref={ref}>
                    <Row>
                      <Col xs={10} sm={5} className="offset-1">
                        <input type="text" value={formDetails.fullname} name="fullname" onChange={handleUpdate} placeholder="Full Name"/>
                      </Col>
                      <Col xs={10} sm={5} className="offset-1 offset-sm-0">
                        <input type="text" value={formDetails.compnay} name="company" onChange={handleUpdate} placeholder="Company"/> 
                      </Col>
                      <Col xs={10} sm={5} className="offset-1">
                        <input type="email" value={formDetails.email} name="email" onChange={handleUpdate} placeholder="Email"/> 
                      </Col>
                      <Col xs={10} sm={5} className="offset-1 offset-sm-0">
                        <input type="tel" value={formDetails.phone} name="phone" onChange={handleUpdate} placeholder="Phone"/> 
                      </Col>
                      <Col xs={10} className="offset-1">
                        <input type="text" value={formDetails.subject} name="subject" onChange={handleUpdate} placeholder="Subject"/> 
                      </Col>
                      <Col xs={10} className="offset-1">
                        <textarea type="text" value={formDetails.message} name="message" onChange={handleUpdate} placeholder="Message"/> 
                      </Col>
                      <Col xs={8} className="buttonBlock offset-2">
                        <ReactiveButton buttonState={state} idleText={<span>Send <GiClick/></span>}
                            color={state === "idle"? 'buttonIdleColor' : state === "loading" ? "buttonLoadingColor" : state === "success" ? "buttonSuccessColor" : "red"}
                            loadingText={
                              <>
                                <FontAwesomeIcon icon={faCircleNotch} spin size="lg" /> Sending
                              </>
                            }
                            successText={
                              <>
                                <FontAwesomeIcon icon={faThumbsUp} /> Successfully send
                              </>
                            }
                            errorText={
                              <>
                                <FontAwesomeIcon icon={faBomb} />Error
                              </>
                            }
                            type={'submit'} className={'class1 class2'}
                            style={{
                              borderRadius: '5px',
                              fontSize:'25px'
                            }}
                            shadow={true} rounded={true} size={'large'} block={true} messageDuration={3000}
                            disabled={false} animation={true}
                          />
                      </Col>
                    </Row>
                </form>
            </Col>
            <div className="cta-gradient-blur2 col-10 offset-1"></div>
          </Row>
        </Container>
    </section>
  )
}