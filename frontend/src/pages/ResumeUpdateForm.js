import {Container} from "reactstrap";
import {TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";

export const ResumeUpdateForm = () => {

    const [formData, setFormData] = useState({
        zunairSubTitle: '',
        zamanSubTitle: '',
        zunairMobile: ''
    });  // Single state object for all form fields

    const [message, setMessage] = useState('');

    // Handle form data change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Save to local storage
    const handleSave = () => {
        const { zunairSubTitle, zamanSubTitle, zunairMobile } = formData;

        if (zunairSubTitle && zamanSubTitle && zunairMobile) {
            localStorage.setItem('zunairSubTitle', zunairSubTitle);
            localStorage.setItem('zamanSubTitle', zamanSubTitle);
            localStorage.setItem('zunairMobile', zunairMobile);
            setMessage('Data saved successfully!');
        } else {
            setMessage('Sub-title set to "Java Software Engineer"');
            localStorage.setItem('zunairSubTitle', 'Java Software Engineer');
            localStorage.setItem('zamanSubTitle', 'Java Software Engineer');
            localStorage.setItem('zunairMobile', '');  // Empty value for mobile number
        }
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" gutterBottom>
                Save Sub-Title
            </Typography>
            <TextField
                label="Zunair Sub-Title"
                variant="outlined"
                fullWidth
                value={formData.zunairSubTitle}
                onChange={handleInputChange}
                margin="normal"
            />
            <TextField
                label="Phone no"
                variant="outlined"
                fullWidth
                value={formData.zamanSubTitle}
                onChange={handleInputChange}
                margin="normal"
            />
            <TextField
                label="Zunair Mobile Number"
                variant="outlined"
                fullWidth
                value={formData.zunairMobile}
                onChange={handleInputChange}
                name="zunairMobile"  // Identify field using name attribute
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                fullWidth
                sx={{marginTop: 2}}
            >
                Save
            </Button>
            {message && (
                <Typography
                    variant="body1"
                    color={message.includes('successfully') ? 'green' : 'red'}
                    sx={{marginTop: 2}}
                >
                    {message}
                </Typography>
            )}
        </Container>
    )
}