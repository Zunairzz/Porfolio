import React from 'react';
import Base from "../component/Base";
import {Container} from "reactstrap";
import my_services from '../assests/my_services.jpeg';


const Service = () => {
    return (
        <Base>
            <div
                className=" items-center justify-center py-10"
                style={{
                    backgroundImage: 'url(../assests/my_services.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px', // Adjust height as needed
                }}>

            </div>
        </Base>
    )
}
export default Service;