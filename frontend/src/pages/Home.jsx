import Base from "../component/Base";
import Profile from "./Profile";
import React from "react";
import '../css/HomePageMyService.css'
import {MyServiceHomePage} from "../component/serviceComponent/MyServiceHomePage";
import {WhyHireMyHomePage} from "../component/whyHireMeComponent/WhyHireMyHomePage";
import WorkExperience from "./WorkExperience";
import {Testimonials} from "../component/Testimonials";
import {TestimonialHome} from "../component/TestimonialHome";

export function Home() {
    return (
        <Base>
            {/*<Profile/>*/}
            <MyServiceHomePage/>
            <WhyHireMyHomePage/>
            <WorkExperience/>
            <TestimonialHome/>
        </Base>
    )
}