import Base from "../components/Base";
import React from "react";
import '../css/HomePageMyService.css'
import {WhyHireMyHomePage} from "../components/whyHireMeComponent/WhyHireMyHomePage";
import WorkExperience from "./WorkExperience";
import {TestimonialHome} from "../components/TestimonialHome";
import PortfolioItemHomePage from "../components/portfolioItemsComponent/PortfolioItemHomePage";
import {ProfileSlider} from "../components/ProfileSlider";
import {MyServiceCard} from "../components/InfoCard";
import BrandSlider from "../components/BrandSlider";
import TechStackSection from "../components/TechStackSection";

export function Home() {
    return (
        <Base>
            {/* Hero / Introduction */}
            <ProfileSlider/>

            {/* Services */}
            <MyServiceCard/>

            {/* Why Hire Me */}
            <WhyHireMyHomePage/>

            {/* Work Experience */}
            <WorkExperience/>

            {/* Portfolio */}
            <PortfolioItemHomePage/>

            {/* Testimonials */}
            <TestimonialHome/>

            {/* Tech Stack */}
            <TechStackSection/>

            {/* Brands */}
            <BrandSlider/>
        </Base>
    );
}
