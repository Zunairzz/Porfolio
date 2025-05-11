import react from "../assests/icons/react.svg";
import node from "../assests/icons/node.svg";
import express from "../assests/icons/express.svg";
import mongoDB from "../assests/icons/mongodb.svg";
import java from "../assests/icons/java.svg";
import spring_boot from "../assests/icons/spring-boot.svg";
import tailwind_css from "../assests/icons/tailwind-css.svg";
import git from "../assests/icons/git.svg";
import figma from "../assests/icons/figma.svg";

const techStack = [
    {name: "React", icon: react},
    {name: "Node.js", icon: node},
    {name: "Express", icon: express},
    {name: "MongoDB", icon: mongoDB},
    {name: "Java", icon: java},
    {name: "Spring Boot", icon: spring_boot},
    {name: "Tailwind CSS", icon: tailwind_css},
    {name: "Git", icon: git},
    {name: "Figma", icon: figma},
];

const TechStackSection = () => {
    return (
        <section id="techstack" className="bg-white py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">Tech Stack <span
                    style={{color: "#ff6200"}}>&</span> Tools</h2>
                <p className="text-gray-500 mt-2">Technologies I work with regularly</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
                {techStack.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center hover:scale-105 transition">
                        <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-16 h-16 object-contain mb-2"
                        />
                        <span className="text-gray-700 font-medium">{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStackSection;
