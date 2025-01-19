import React from "react";
import "../css/Testimonial.css";
import {Col, Row} from "reactstrap";
import s1 from '../assests/s1.png';
import {Avatar} from "@mui/material";
import {Testimonials} from "./Testimonials";

const CardStyle = {
    backgroundColor: 'rgba(84,84,84,0.5)',
    border: '2px solid #b2b2b2',
    borderRadius: '2rem',
}

export function TestimonialHome() {
    return (
        <div className="testimonial-parent">
            <h1 className="text-center custom-text_heading mt-2 mb-5">
                Testimonials That<br/>
                Speaks to <span style={{color: '#ff6600'}}>My Results</span>
            </h1>

            <Testimonials/>
        </div>
    )
}