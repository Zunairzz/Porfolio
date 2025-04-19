import React from "react";
import { motion } from "framer-motion";
import "../css/InfoCard.css";

const InfoCard = ({ image, heading, description }) => {
    return (
        <motion.div
            className="info-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
        >
            {/* Top Right Border */}
            <div className="top-right-border"></div>

            <motion.img
                src={image}
                alt={heading}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            />

            <p className='mt-4'>{description}</p>

            {/* Bottom Left Border */}
            <div className="bottom-left-border"></div>

            <p className="info-card-title" style={{color: 'black'}}>{heading}</p>
        </motion.div>
    );
};

export const MyServiceCard = () => {
    return (
        <motion.div
            className="mx-auto py-12 px-4"
            style={{backgroundColor: '#F4F6FF', padding: '100px'}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h2
                className="text-2xl font-bold text-gray-800 text-center info-card-heading"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                3 Reasons To <span style={{color: "#ff6600"}}> Choose Me</span>
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-6">
                {SERVICE.map((data, index) => (
                    <InfoCard
                        key={index}
                        image={data.image}
                        heading={data.heading}
                        description={data.description}
                    />
                ))}
            </div>
        </motion.div>
    );
};

const SERVICE = [
    {
        id: 1,
        image: require("../assests/ui_ux.png"),
        heading: "UI / UX",
        description: "Innovative UI/UX designer focused on crafting intuitive, user-friendly, and visually appealing experiences."
    },
    {
        id: 2,
        image: require("../assests/web_design.png"),
        heading: "Web Design",
        description: "Creative web designer crafting visually appealing, user-friendly, and responsive websites for seamless experiences."
    },
    {
        id: 3,  // Fixed duplicate id issue
        image: require("../assests/dev.png"),
        heading: "Java Developer",
        description: "Skilled Java developer building efficient, scalable, and high-performance applications with clean code practices."
    }
];

