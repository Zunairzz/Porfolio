import React, {useState} from 'react';
import axios from 'axios';
import Base from "./Base";

const CLOUD_NAME = 'dyo1h8cbk'; // Replace it with your Cloudinary cloud name
const UPLOAD_PRESET = 'resume_uploads'; // Replace it with your unsigned upload preset

const ResumeUploader = () => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [fileUrl, setFileUrl] = useState('');
    const [publicId, setPublicId] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const uploadToCloudinary = async () => {
        if (!file) return alert('Please select a file first');
        if (file.type !== 'application/pdf') return alert('Only PDF files are allowed');

        setUploading(true);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', UPLOAD_PRESET);
        formData.append('resource_type', 'raw'); // Important for PDFs

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/raw/upload`,
                formData
            );
            console.log(response);
            const {secure_url, public_id} = response.data;
            setFileUrl(secure_url);
            setPublicId(public_id);
        } catch (error) {
            console.error('Upload failed:', error);
            alert('Upload failed');
        } finally {
            setUploading(false);
        }
    };

    // Function to trigger the download
    const handleDownload = () => {
        if (!fileUrl) return;

        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'resume.pdf'; // Suggest a filename for the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up
    };

    return (
        <Base>
            <div className="p-4 border rounded max-w-md mx-auto" style={{marginTop: '140px'}}>
                <h2 className="text-lg font-semibold mb-2">Upload Resume (PDF)</h2>
                <input type="file" accept="application/pdf" onChange={handleFileChange} className="mb-2"/>
                <button
                    onClick={uploadToCloudinary}
                    disabled={uploading}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    {uploading ? 'Uploading...' : 'Upload'}
                </button>

                {fileUrl && (
                    <div className="mt-4">
                        <p>
                            <strong>Download URL: </strong>
                            <button
                                onClick={handleDownload}
                                className="text-blue-500 underline hover:text-blue-700"
                            >
                                Download PDF
                            </button>
                        </p>
                        <p><strong>Public ID:</strong> {publicId}</p>
                    </div>
                )}
            </div>
        </Base>
    );
};

export default ResumeUploader;