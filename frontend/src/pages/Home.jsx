import Base from "../components/Base";
import React, {useEffect, useState} from "react";
import '../css/HomePageMyService.css'
import {WhyHireMyHomePage} from "../components/whyHireMeComponent/WhyHireMyHomePage";
import WorkExperience from "./WorkExperience";
import {TestimonialHome} from "../components/TestimonialHome";
import PortfolioItemHomePage from "../components/portfolioItemsComponent/PortfolioItemHomePage";
import {ProfileSlider} from "../components/ProfileSlider";
import {MyServiceCard} from "../components/InfoCard";
import BrandSlider from "../components/BrandSlider";
import TechStackSection from "../components/TechStackSection";
import {Button} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export function Home() {
    const [showTopButton, setShowTopButton] = useState(false);
    // Handle scroll for "Back to Top" button
    useEffect(() => {
        const handleScroll = () => {
            setShowTopButton(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
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

            {showTopButton && (

                <Button
                    onClick={scrollToTop}
                    sx={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        borderRadius: "50%",
                        minWidth: "50px",
                        height: "50px",
                        backgroundColor: "#ff6600",
                        "&:hover": {backgroundColor: "#e65c00"},
                    }}
                >
                    <ArrowUpwardIcon sx={{color: "white"}}/>
                </Button>
            )}
        </Base>
    );
}
