import {Col, Row} from "reactstrap";
import {serviceData} from "../../data/ServiceData";
import React from "react";
import "../../css/HomePageMyService.css";
import {CustomServiceCard} from "./CustomServiceCard";

export function MyServiceHomePage() {
    return (
        <div
            className="items-center justify-center service-component">
            <div></div>
            <Row className='pb-5'>
                <Col className="text-white">
                    <span className="service-heading-p-one">My</span>
                    <span className="service-heading-p-two"> Service</span>
                </Col>
                <Col className="text-white"><p>Welcome to our page</p></Col>
            </Row>
            <Row className="d-flex">
                {serviceData.map(item => (
                    <Col xxl={3} xl={3} lg={4} md={6} className="mb-5 mx-2">
                        <CustomServiceCard index={item.id} heading={item.heading} image={item.image}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}