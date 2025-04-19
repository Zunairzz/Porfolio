import Base from "../components/Base";
import React from "react";
import '../css/HomePageMyService.css'
import {WhyHireMyHomePage} from "../components/whyHireMeComponent/WhyHireMyHomePage";
import WorkExperience from "./WorkExperience";
import {TestimonialHome} from "../components/TestimonialHome";
import PortfolioItemHomePage from "../components/portfolioItemsComponent/PortfolioItemHomePage";
import {ProfileSlider} from "../components/ProfileSlider";
import {MyServiceCard} from "../components/InfoCard";

export function Home() {
    return (
        <Base>
            {/*<Profile/>*/}
            <ProfileSlider/>
            {/*<MyServiceHomePage/>*/}
            <MyServiceCard/>
            <WhyHireMyHomePage/>
            <WorkExperience/>
            {/*<ParallaxSection/>*/}
            <PortfolioItemHomePage/>
            <TestimonialHome/>
        </Base>
    )
}