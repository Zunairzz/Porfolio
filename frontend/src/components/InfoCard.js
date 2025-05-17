import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../css/InfoCard.css";

const InfoCard = ({ image, heading, description, index }) => {
    return (
        <motion.div
            className="info-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }} // Staggered fade-in
            whileHover={{ scale: 1.05 }}
        >
            <div className="top-right-border"></div>
            <motion.img
                src={image}
                alt={heading}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            />
            <p style={{ marginTop: "40px", color: "white", fontSize: "18px" }}>
                {description}
            </p>
            <div className="bottom-left-border"></div>
            <p className="info-card-title" style={{ color: "white" }}>
                {heading}
            </p>
        </motion.div>
    );
};

export const MyServiceCard = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });

    const headingVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className="mx-auto py-12 px-4 parent-info-card"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.h2
                className="text-2xl font-bold text-white text-center info-card-heading"
                variants={headingVariants}
            >
                3 Reasons To <span style={{ color: "#ff6600" }}> Choose Me</span>
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-6">
                {SERVICE.map((data, index) => (
                    <InfoCard
                        key={index}
                        image={data.image}
                        heading={data.heading}
                        description={data.description}
                        index={index}
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
        description:
            "Innovative UI/UX designer focused on crafting intuitive, user-friendly, and visually appealing experiences.",
    },
    {
        id: 2,
        image: require("../assests/web_design.png"),
        heading: "Web Design",
        description:
            "Creative web designer crafting visually appealing, user-friendly, and responsive websites for seamless experiences.",
    },
    {
        id: 3,
        image: require("../assests/dev.png"),
        heading: "Java Developer",
        description:
            "Skilled Java developer building efficient, scalable, and high-performance applications with clean code practices.",
    },
];