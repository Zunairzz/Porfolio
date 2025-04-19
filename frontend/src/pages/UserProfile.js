import React from 'react';
import '../css/UserProfile.css';
import zunair from "../image/ZunairResumeImage.jpg";
import zaman from "../image/ZamanResumeImage.jpg";
import umair from "../image/UmairResumeImage.jpg";
import Base from "../components/Base";
import {useParams} from 'react-router-dom';

const UserProfile = () => {
    const {id} = useParams(); // Get the ID from the URL

    // Define all users' data in an array
    const users = [
        {
            id: "1",
            name: "Zunair Sarwar",
            title: "Senior Java Developer",
            email: "zunairsarwar1@gmail.com",
            phone: "+92 324 4165 642",
            location: "Lahore, Pakistan",
            bio: "As a full stack developer, I have a proven\n" +
                "track record of building scalable web\n" +
                "applications using Java and React. I am\n" +
                "proficient in the Spring Boot and Node.js\n" +
                "frameworks, as well as React on the front-\n" +
                "end, and MySQL on the back-end. I possess\n" +
                "strong problem-solving skills, attention to\n" +
                "detail, and the ability to work both\n" +
                "independently and collaboratively in a team\n" +
                "environment. I am committed to staying up-\n" +
                "to-date with the latest industry trends and\n" +
                "technologies, and I am eager to contribute\n" +
                "my skills and experience to help\n" +
                "organizations achieve their goals.",
            avatar: zunair,
            skills: ["Java", "JSF", "Spring boot", "PHP", "HTML/CSS", "Node.js", "Hibernate", "SQL", "React.js"],
            experience: [
                {
                    company: "Upgenics International",
                    role: "Java Software Engineer",
                    period: "2023 - Present",
                    description: "Developed a sophisticated JavaFX desktop application for diagnosing iPhones, Android devices, and iPads. Implemented multi-threading for handling multiple device connections on MacBooks. Integrated APIs for seamless data exchange and precise diagnostics. Collaborated using Git for version control and repository management. Provided remote technical support, troubleshooting client system issues to ensure optimal performance."
                },
                {
                    company: "ABL Asset Management",
                    role: "Java Developer",
                    period: "2022 - 2023",
                    description: "Worked with Java frameworks like Spring Boot, JSF, and JavaFX for application development. Utilized Oracle PL/SQL for backend data management. Managed projects like ABL-SOFT (JSF-based reporting and user rights management) and developed AmsEmailSender for scheduled email delivery. Collaborated on version control using Git Server."
                },
                {
                    company: "XStak",
                    role: "Java Software Engineer",
                    period: "2020 - 2022",
                    description: "Worked as a Back-End Software Engineer on an omnichannel ERP middleware, integrating order management and inventory systems with platforms like Magento and Shopify. Contributed to Pakistan’s leading cloud-based POS software. Designed and optimized backend solutions for seamless order processing and inventory synchronization. Collaborated on version control using Git."
                }
            ],
            social: {
                linkedin: "linkedin.com/in/zunair-sarwar",
                github: "github.com/zunair-sarwar",
                portfolio: "zunair.dev"
            }
        },
        {
            id: "2",
            name: "Zaman Tariq",
            title: "Frontend Developer",
            email: "zaman@example.com",
            phone: "+1 (555) 234-5678",
            location: "New York, NY",
            bio: "Passionate about creating beautiful and functional user interfaces.",
            avatar: zaman,
            skills: ["React", "TypeScript", "JavaScript", "CSS3", "HTML5"],
            experience: [
                {
                    company: "DesignTech",
                    role: "Frontend Developer",
                    period: "2020 - Present",
                    description: "Developed responsive web applications"
                },
                {
                    company: "WebFlow",
                    role: "Junior Developer",
                    period: "2018 - 2020",
                    description: "Assisted in frontend development"
                }
            ],
            social: {
                linkedin: "linkedin.com/in/zaman-tariq",
                github: "github.com/zaman-tariq",
                portfolio: "zaman.dev"
            }
        },
        {
            id: "3",
            name: "Umair Sarwar",
            title: "Graphic Designer",
            email: "umairdigimarket@gmail.com",
            phone: "+92 321 4861262",
            location: "Lahore, Pakistan",
            bio: "To utilize and enhance my capabilities, knowledge in a viable manner for the benefit of the organization that encourages innovation and creativity in the job process. I want to accomplish the job assigned to me in a better way. I am looking for a highly challenging and dynamic work environment in which I'll be able to utilize my skills and to provide valuable work by using my experience.",
            avatar: umair,
            skills: ["Corel Draw", "Photoshop", "Illustrator", "InPage", "UI/UX", "Figma", "InDesign"],
            experience: [
                {
                    company: "Fakiha Travel & Tours PVT LTD",
                    role: "Graphic Desginer & Social Media Manager",
                    period: "2021 - Present",
                    description: "Created branding materials and UI designs"
                },
                {
                    company: "PrintMedia",
                    role: "Junior Designer",
                    period: "2015 - 2018",
                    description: "Assisted in graphic design projects"
                }
            ],
            social: {
                linkedin: "linkedin.com/in/umair-sarwar",
                github: "github.com/umair-sarwar",
                portfolio: "umair.design"
            }
        }
    ];

    // Find the user based on the ID from URL params
    const user = users.find(u => u.id === id) || users[0]; // Fallback to first user if no match

    return (
        <Base>
            <div className="up-profile-wrapper">
                <div className="up-profile-container">
                    {/* Header Section */}
                    <div className="up-profile-header">
                        <div className="up-avatar-container">
                            <img src={user.avatar} alt="Profile" className="up-profile-avatar"/>
                        </div>
                        <div className="up-header-content">
                            <div className="up-name">{user.name}</div>
                            <div className="up-title">{user.title}</div>
                            <div className="up-location">{user.location}</div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="up-content-grid">
                        {/* Left Column */}
                        <div className="up-left-column">
                            <div className="up-section">
                                <div className="up-section-title">Contact</div>
                                <div className="up-contact-info">
                                    <div className="up-contact-item">
                                        <span className="up-contact-label">Email:</span> {user.email}
                                    </div>
                                    <div className="up-contact-item">
                                        <span className="up-contact-label">Phone:</span> {user.phone}
                                    </div>
                                </div>
                            </div>

                            <div className="up-section">
                                <div className="up-section-title">Skills</div>
                                <div className="up-skills-container">
                                    {user.skills.map((skill, index) => (
                                        <span key={index} className="up-skill-badge">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="up-section">
                                <div className="up-section-title">Connect</div>
                                <div className="up-social-links">
                                    <a href={`https://${user.social.linkedin}`} target="_blank"
                                       className="up-social-link">
                                        LinkedIn
                                    </a>
                                    <a href={`https://${user.social.github}`} target="_blank"
                                       className="up-social-link">
                                        GitHub
                                    </a>
                                    <a href={`https://${user.social.portfolio}`} target="_blank"
                                       className="up-social-link">
                                        Portfolio
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="up-right-column">
                            <div className="up-section">
                                <div className="up-section-title">About</div>
                                <div className="up-bio-text">{user.bio}</div>
                            </div>

                            <div className="up-section">
                                <div className="up-section-title">Experience</div>
                                <div className="up-experience-list">
                                    {user.experience.map((exp, index) => (
                                        <div key={index} className="up-experience-item">
                                            <div className="up-experience-role">{exp.role}</div>
                                            <div className="up-experience-company">{exp.company}</div>
                                            <div className="up-experience-period">{exp.period}</div>
                                            <div className="up-experience-desc">{exp.description}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    );
};

export default UserProfile;