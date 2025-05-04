import React, {useEffect, useState} from "react";
import ResumeService from "../services/ResumeService";
import Base from "./Base";

const ResumeListsComponent = () => {
    const [resumes, setResumes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchResumes = async () => {
            try {
                const response = await ResumeService.getAllResumes();
                console.log(response.data);
                const resumeData = Array.isArray(response?.data) ? response?.data : [];
                await new Promise(resolve => setTimeout(resolve, 1000));
                setResumes(resumeData);
                if (resumeData.length === 0) {
                    setError("No resumes found");
                }
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch resumes");
                setLoading(false);
            }
        };

        fetchResumes();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <Base>
                <div className="text-center text-red-600 p-6 bg-red-50 rounded-lg max-w-2xl mx-auto"
                     style={{marginTop: '190px'}}>
                    <p className="text-lg font-semibold">{error}</p>
                </div>
            </Base>
        );
    }

    return (
        <Base>
            <div className="container mx-auto p-6 lg:p-8 min-h-screen" style={{marginTop: '130px'}}>
                <h1 className="text-3xl font-extrabold mb-8 text-gray-900 tracking-tight">Resume Dashboard</h1>
                <div className="overflow-x-auto shadow-xl rounded-xl bg-white">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-indigo-600">
                        <tr>
                            <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">Name</th>
                            <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">Email</th>
                            <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">Phone</th>
                            <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">Experience</th>
                            <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">Resume
                                (PDF)
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                        {resumes.map(resume => (
                            <tr key={resume._id} className="hover:bg-indigo-50 transition-colors duration-200">
                                <td className="py-4 px-6 text-sm text-gray-800 font-medium">{resume.name}</td>
                                <td className="py-4 px-6 text-sm text-gray-600">{resume.email}</td>
                                <td className="py-4 px-6 text-sm text-gray-600">{resume.phoneNo}</td>
                                <td className="py-4 px-6 text-sm text-gray-600">{resume.experience}</td>
                                <td className="py-4 px-6 text-sm text-gray-600">
                                    {resume?.document?.url ? (
                                        <a
                                            href={resume.document.url}
                                            download
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-indigo-600 hover:text-indigo-800 underline"
                                        >
                                            Download PDF
                                        </a>
                                    ) : (
                                        <span className="text-gray-400">No PDF available</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Base>
    );
};

export default ResumeListsComponent;