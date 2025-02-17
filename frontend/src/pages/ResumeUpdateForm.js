import { Container } from "reactstrap";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

export const ResumeUpdateForm = () => {
    const initialFormData = {
        title: '',
        subTitle: '',
        mobile: '',
        email: ''
    };

    const [formData, setFormData] = useState({
        zunair: { ...initialFormData },
        zaman: { ...initialFormData },
        umair: { ...initialFormData }
    });

    const [messages, setMessages] = useState({
        zunair: '',
        zaman: '',
        umair: ''
    });

    // Load data from localStorage when the component mounts
    useEffect(() => {
        const persons = ['zunair', 'zaman', 'umair'];
        persons.forEach((person) => {
            const savedData = {
                title: localStorage.getItem(`${person}Title`) || '',
                subTitle: localStorage.getItem(`${person}SubTitle`) || '',
                mobile: localStorage.getItem(`${person}Mobile`) || '',
                email: localStorage.getItem(`${person}Email`) || ''
            };
            setFormData((prevData) => ({
                ...prevData,
                [person]: savedData
            }));
        });
    }, []);

    const handleInputChange = (person) => (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [person]: {
                ...prevData[person],
                [name]: value
            }
        }));
    };

    const handleSave = (person, defaultData) => {
        const data = formData[person];
        if (data.title || data.subTitle || data.mobile || data.email) {
            Object.keys(data).forEach((key) => {
                localStorage.setItem(`${person}${key.charAt(0).toUpperCase() + key.slice(1)}`, data[key]);
            });
            setMessages((prevMessages) => ({
                ...prevMessages,
                [person]: 'Data saved successfully!'
            }));
        } else {
            Object.keys(defaultData).forEach((key) => {
                localStorage.setItem(`${person}${key.charAt(0).toUpperCase() + key.slice(1)}`, defaultData[key]);
            });
            setMessages((prevMessages) => ({
                ...prevMessages,
                [person]: 'Fields set to default'
            }));
        }

        setFormData((prevData) => ({
            ...prevData,
            [person]: { ...initialFormData }
        }));
    };

    const persons = [
        { key: 'zunair', name: 'Zunair Sarwar', subTitle: 'Java Software Engineer', mobile: '0324 4165642', email: 'zunairsarwar1@gmail.com' },
        { key: 'zaman', name: 'Zaman Tariq', subTitle: 'Java Software Engineer', mobile: '0324 4165642', email: 'zamantariq@gmail.com' },
        { key: 'umair', name: 'Umair Sarwar', subTitle: 'React Developer', mobile: '0324 1234567', email: 'umairsarwar@gmail.com' }
    ];

    return (
        <Container maxWidth="xs" className="p-5">
            {persons.map((person) => (
                <div key={person.key}>
                    <Typography variant="h4" gutterBottom>{person.name} Details</Typography>
                    <TextField name="title" label="Title" fullWidth value={formData[person.key].title}
                               onChange={handleInputChange(person.key)} margin="normal"/>
                    <TextField name="subTitle" label="Sub Title" fullWidth value={formData[person.key].subTitle}
                               onChange={handleInputChange(person.key)} margin="normal"/>
                    <TextField name="mobile" label="Mobile" fullWidth value={formData[person.key].mobile}
                               onChange={handleInputChange(person.key)} margin="normal"/>
                    <TextField name="email" label="Email" fullWidth value={formData[person.key].email}
                               onChange={handleInputChange(person.key)} margin="normal"/>
                    <Button variant="contained" color="primary" onClick={() => handleSave(person.key, person)} fullWidth sx={{ marginTop: 2 }}>
                        Save
                    </Button>
                    {messages[person.key] && <Typography variant="body1" color="textSecondary">{messages[person.key]}</Typography>}
                    <hr/>
                </div>
            ))}
        </Container>
    );
};