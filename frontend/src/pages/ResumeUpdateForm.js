import {Container} from "reactstrap";
import {TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";

export const ResumeUpdateForm = () => {

    const [zunairFormData, setZunairFormData] = useState({
        zunairTitle: '',
        zunairSubTitle: '',
        zunairMobile: '',
        zunairEmail: ''
    });  // Single state object for all form fields

    const [zamanFormData, setZamanFormData] = useState({
        zamanTitle: '',
        zamanSubTitle: '',
        zamanMobile: '',
        zamanEmail: ''
    });  // Single state object for all form fields

    const [message, setMessage] = useState('');
    const [zamanMessage, setZamanMessage] = useState('');

    // Handle form data change
    const handleInputChange = (e) => {
        // alert(e.target);
        const {name, value} = e.target;
        setZunairFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form data change
    const handleZamanInputChange = (e) => {
        const {name, value} = e.target;
        setZamanFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Save to local storage
    const handleZunairSave = () => {
        const {
            zunairTitle,
            zunairSubTitle,
            zunairMobile,
            zunairEmail
        } = zunairFormData;

        if (zunairTitle && zunairSubTitle && zunairMobile && zunairEmail) {
            localStorage.setItem('zunairTitle', zunairSubTitle);
            localStorage.setItem('zunairSubTitle', zunairSubTitle);
            localStorage.setItem('zunairMobile', zunairSubTitle);
            localStorage.setItem('zunairEmail', zunairSubTitle);

            setMessage('Data saved successfully!');
        } else {
            setMessage('Fields set to default');

            localStorage.setItem('zunairTitle', 'Zunair Sarwar');
            localStorage.setItem('zunairSubTitle', 'Java Software Engineer');
            localStorage.setItem('zunairMobile', '0324 4165642');
            localStorage.setItem('zunairEmail', 'zunairsarwar1@gmail.com');
        }

        // Reset the form fields
        setZunairFormData({
            zunairTitle: '',
            zunairSubTitle: '',
            zunairMobile: '',
            zunairEmail: ''
        });
    };

    const handleZamanSave = () => {
        const {
            zamanTitle,
            zamanSubTitle,
            zamanMobile,
            zamanEmail
        } = zamanFormData;

        if (zamanTitle || zamanSubTitle || zamanMobile || zamanEmail) {
            localStorage.setItem('zamanTitle', zamanTitle);
            localStorage.setItem('zamanSubTitle', zamanSubTitle);
            localStorage.setItem('zamanMobile', zamanMobile);
            localStorage.setItem('zamanEmail', zamanEmail);
            setZamanMessage('Data saved successfully!');
        } else {
            setZamanMessage('Fields set to default');

            localStorage.setItem('zamanTitle', 'Zaman Tariq');
            localStorage.setItem('zamanSubTitle', 'Java Software Engineer');
            localStorage.setItem('zamanMobile', '0324 4165642');
            localStorage.setItem('zamanEmail', 'zamantariq@gmail.com');
        }

        // Reset the form fields
        setZamanFormData({
            zamanTitle: '',
            zamanSubTitle: '',
            zamanMobile: '',
            zamanEmail: ''
        });
    };

    return (
        <Container maxWidth="xs" className="p-5">
            <Typography variant="h4" gutterBottom>Zunair Details</Typography>
            <TextField name="zunairTitle" label="Title" variant="outlined" fullWidth value={zunairFormData.zunairTitle}
                       onChange={handleInputChange} margin="normal"/>
            <TextField name="zunairSubTitle" label="Sub Title" variant="outlined" fullWidth
                       value={zunairFormData.zunairSubTitle}
                       onChange={handleInputChange} margin="normal"/>
            <TextField name="zunairMobile" label="Phone no" variant="outlined" fullWidth
                       value={zunairFormData.zunairMobile}
                       onChange={handleInputChange} margin="normal"/>
            <TextField name="zunairEmail" label="Email" variant="outlined" fullWidth value={zunairFormData.zunairEmail}
                       onChange={handleInputChange} margin="normal"/>
            <Button variant="contained" color="primary" onClick={handleZunairSave} fullWidth sx={{marginTop: 2}}>
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

            <br/>
            <br/>
            <hr/>
            <br/>
            <br/>
            <Typography variant="h4" gutterBottom>Zaman Details</Typography>
            <TextField name="zamanTitle" label="Title" variant="outlined" fullWidth value={zamanFormData.zamanTitle}
                       onChange={handleZamanInputChange} margin="normal"/>
            <TextField name="zamanSubTitle" label="Sub Title" variant="outlined" fullWidth
                       value={zamanFormData.zamanSubTitle}
                       onChange={handleZamanInputChange} margin="normal"/>
            <TextField name="zamanMobile" label="Phone no" variant="outlined" fullWidth
                       value={zamanFormData.zamanMobile}
                       onChange={handleZamanInputChange} margin="normal"/>
            <TextField name="zamanEmail" label="Email" variant="outlined" fullWidth value={zamanFormData.zamanEmail}
                       onChange={handleZamanInputChange} margin="normal"/>
            <Button variant="contained" color="primary" onClick={handleZamanSave} fullWidth sx={{marginTop: 2}}>
                Save
            </Button>
            {zamanMessage && (
                <Typography
                    variant="body1"
                    color={zamanMessage.includes('successfully') ? 'green' : 'red'}
                    sx={{marginTop: 2}}
                >
                    {zamanMessage}
                </Typography>
            )}

        </Container>
    )
}