import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './pages/NotFound';
import AuthProvider from './context/AuthContext';

// Regular imports (no lazy loading)
import {Home} from './pages/Home';
import {About} from './pages/About';
import Service from './pages/Service';
import {ResumePage} from './pages/ResumePage';
import {ContactUs} from './pages/ContactUs';
import {ResumeUpdateForm} from './pages/ResumeUpdateForm';
import ProjectsPage from './pages/ProjectsPage';
import UserProfile from './pages/UserProfile';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import AddProjectForm from './pages/AddProjectForm';
import PrivateRoutes from './components/ProtectedRoute';
import SolutionsPage from "./pages/SolutionsPage";
import AddResumeForm from "./pages/AddResumeForm";
import ResumeListsComponent from "./components/ResumeListsComponent";
import ResumeUploader from "./components/ResumeUploader";
import AddProblemForm from "./pages/AddProblemForm";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    />
                    <ErrorBoundary>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/service" element={<Service/>}/>
                            <Route path="/resume" element={<ResumePage/>}/>
                            <Route path="/projects" element={<ProjectsPage/>}/>
                            <Route path="/contact" element={<ContactUs/>}/>
                            <Route path="/profile/:id" element={<UserProfile/>}/>
                            <Route path="/update" element={<ResumeUpdateForm/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/problems" element={<SolutionsPage/>}/>
                            <Route path="/user" element={<PrivateRoutes/>}>
                                <Route path="add-project" element={<AddProjectForm/>}/>
                                <Route path="add-resume" element={<AddResumeForm/>}/>
                                <Route path="resume-table" element={<ResumeListsComponent/>}/>
                                <Route path="resume-uploader" element={<ResumeUploader/>}/>
                                <Route path="add-problem" element={<AddProblemForm/>}/>
                            </Route>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </ErrorBoundary>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;