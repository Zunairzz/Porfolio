import Base from "../component/Base";
import Profile from "./Profile";
import React from "react";
import '../css/HomePageMyService.css'
import {MyServiceHomePage} from "../component/serviceComponent/MyServiceHomePage";
import {WhyHireMyHomePage} from "../component/whyHireMeComponent/WhyHireMyHomePage";
import WorkExperience from "./WorkExperience";
import {TestimonialHome} from "../component/TestimonialHome";
import PortfolioItemHomePage from "../component/portfolioItemsComponent/PortfolioItemHomePage";

export function Home() {
    return (
        <Base>
            <Profile/>
            <MyServiceHomePage/>
            <WhyHireMyHomePage/>
            <WorkExperience/>
            <PortfolioItemHomePage/>
            <TestimonialHome/>
        </Base>
    )
}