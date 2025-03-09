import Base from "../component/Base";
import Profile from "./Profile";
import React from "react";
import '../css/HomePageMyService.css'
import {WhyHireMyHomePage} from "../component/whyHireMeComponent/WhyHireMyHomePage";
import WorkExperience from "./WorkExperience";
import {TestimonialHome} from "../component/TestimonialHome";
import PortfolioItemHomePage from "../component/portfolioItemsComponent/PortfolioItemHomePage";
import {ProfileSlider} from "../component/ProfileSlider";
import {MyServiceCard} from "../component/InfoCard";

export function Home() {
    return (
        <Base>
            {/*<Profile/>*/}
            <ProfileSlider/>
            {/*<MyServiceHomePage/>*/}
            <MyServiceCard/>
            <WhyHireMyHomePage/>
            <WorkExperience/>
            <PortfolioItemHomePage/>
            <TestimonialHome/>
        </Base>
    )
}