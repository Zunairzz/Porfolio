import Base from "../component/Base";
import Profile from "./Profile";
import {Col, Row} from "reactstrap";
import React from "react";
import '../css/HomePageMyService.css'
import {CustomServiceCard} from "../component/CustomServiceCard";
import {serviceData} from "../data/ServiceData";

export function Home() {
    return (
        <Base>
            <Profile/>
            <div
                className="items-center justify-center service-component">
                <div>

                </div>
                <Row className='pb-5'>
                    <Col className="text-white">
                        <span className="service-heading-p-one">My</span>
                        <span className="service-heading-p-two"> Service</span>
                    </Col>
                    <Col className="text-white"><p>Welcome to our page</p></Col>
                </Row>
                <Row className="d-flex">
                    {serviceData.map(item => (
                        <Col>
                            <CustomServiceCard heading={item.heading} image={item.image}/>
                        </Col>
                    ))}
                </Row>
            </div>
        </Base>
    )
}