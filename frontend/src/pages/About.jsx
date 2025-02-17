import Base from "../component/Base";
import "../css/about.css";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {motion} from "framer-motion";
import zaman from "../image/zaman_png.png";
import zunair from "../image/zuni_png.png";
import umair from "../image/umair_bhai_png.png"
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

export function About() {
    const items = [
        {
            id: 1,
            name: "Zunair Sarwar",
            src: zunair,
            jobDescription: "Java Software Engineer",
            linkedIn: "https://www.linkedin.com/in/zunair-sarwar-401323221/",
            instagram: "https://www.instagram.com/zun_i333/"
        },
        {
            id: 2,
            name: "Zaman Tariq",
            src: zaman,
            jobDescription: "Java Software Engineer",
            linkedIn: "https://www.linkedin.com/in/zaman-tariq-931738230/",
            instagram: "https://www.instagram.com/zamanjutt12/"
        },
        {
            id: 3,
            name: "Umair Sarwar",
            src: umair,
            jobDescription: "Graphic Designer",
            linkedIn: "https://www.linkedin.com/in/zaman-tariq-931738230/",
            instagram: "https://www.instagram.com/zamanjutt12/"
        }
    ];

    return (
        <Base>
            <motion.div
                className="parent text-center py-10"
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
            >
                <motion.h1
                    className="text-3xl font-bold mb-4"
                    initial={{opacity: 0, y: -30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 1, delay: 0.2}}
                    viewport={{once: true}}
                >
                    Meet our team
                </motion.h1>

                <motion.p
                    className="text-gray-600 mb-8 max-w-2xl mx-auto"
                    initial={{opacity: 0, y: -20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 1, delay: 0.4}}
                    viewport={{once: true}}
                >
                    We’re a dynamic group of individuals passionate about what we do and dedicated to delivering
                    the best results for our clients.
                </motion.p>

                <motion.div
                    initial={{opacity: 0, y: 50}}  // Start lower with opacity 0
                    whileInView={{opacity: 1, y: 0}}  // Move up to normal position
                    transition={{duration: 1}}
                    viewport={{once: true}}
                    className="flex flex-wrap justify-center gap-6">
                    {items.map((item, index) => (
                        <AboutUsCard
                            key={item.id}
                            image={item.src}
                            name={item.name}
                            jobDescription={item.jobDescription}
                            linkedIn={item.linkedIn}
                            instagram={item.instagram}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </Base>
    );
}

const AboutUsCard = ({image, name, jobDescription, linkedIn, instagram}) => {
    return (
        <div>
            <Card className="w-80 bg-gray-100 text-center shadow-none p-4 rounded-lg">
                <CardMedia
                    className="w-52 h-52 mx-auto rounded-full object-cover"
                    image={image}
                    title={name}
                />
                <CardContent>
                    <Typography className="text-lg font-semibold">{name}</Typography>
                    <Typography className="text-gray-600 text-sm">{jobDescription}</Typography>
                </CardContent>
                <div className="flex justify-center gap-4 pb-4">
                    <a href={instagram} target="_blank" rel="noopener noreferrer"
                       className="text-gray-500 hover:text-black transition-colors">
                        <InstagramIcon/>
                    </a>
                    <a href={linkedIn} target="_blank" rel="noopener noreferrer"
                       className="text-gray-500 hover:text-black transition-colors">
                        <LinkedInIcon/>
                    </a>
                </div>
            </Card>
        </div>
    );
};
