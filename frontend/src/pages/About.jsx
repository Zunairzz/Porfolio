// About.js
import Base from "../components/Base";
import "../css/about.css";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {motion} from "framer-motion";
import zaman from "../image/zaman_png.png";
import zunair from "../image/zuni_png.png";
import umair from "../image/umair_bhai_png.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import {useNavigate} from "react-router-dom";

export function About() {
    const navigate = useNavigate();
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
                className="parent text-center"
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-black mb-12 bg-clip-text text-transparent">
                    Meet <span style={{color:"#ff6200"}}>our</span> team
                </h1>

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
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                    viewport={{once: true}}
                    className="flex flex-wrap justify-center gap-6"
                >
                    {items.map((item) => (
                        <AboutUsCard
                            key={item.id}
                            item={item}  // Pass the entire item object
                            onClick={() => navigate(`/profile/${item.id}`)}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </Base>
    );
}

const AboutUsCard = ({item, onClick}) => {
    return (
        <div className="cursor-pointer">
            <Card
                className="w-80 bg-gray-100 text-center shadow-none p-4 rounded-lg relative hover:shadow-lg transition-shadow">
                {/*<div className="absolute top-2 right-2">*/}
                {/*    <PersonIcon*/}
                {/*        className="text-gray-400 hover:text-orange-500 transition-colors"*/}
                {/*        sx={{fontSize: 28}}*/}
                {/*    />*/}
                {/*</div>*/}
                <CardMedia
                    className="w-52 h-52 mx-auto rounded-full object-cover"
                    image={item.src}
                    title={item.name}
                />
                <CardContent>
                    <Typography className="text-lg font-semibold">{item.name}</Typography>
                    <Typography className="text-gray-600 text-sm">{item.jobDescription}</Typography>
                </CardContent>
                <div className="flex justify-center gap-4 pb-4">
                    <a href={item.instagram} target="_blank" rel="noopener noreferrer"
                       className="text-gray-500 hover:text-black transition-colors">
                        <InstagramIcon/>
                    </a>
                    <a href={item.linkedIn} target="_blank" rel="noopener noreferrer"
                       className="text-gray-500 hover:text-black transition-colors">
                        <LinkedInIcon/>
                    </a>
                    <a onClick={onClick} target="_blank" rel="noopener noreferrer"
                       className="text-gray-500 hover:text-black transition-colors">
                        <PersonIcon/>
                    </a>
                </div>
            </Card>
        </div>
    );
};