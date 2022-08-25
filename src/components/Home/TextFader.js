import React from "react";
import ReactRotatingText from "react-rotating-text";

const content = ["Machine Learning Engineer", "Deep Learning Engineer", "Data Scientist", "Web Developer"];

export default function TextFader(){ 
        return (  
            <div>
                <ReactRotatingText
                items={content}
                emptyPause={250}
                pause={2000}
                typingInterval={70}
                />
            </div>
        )
    }