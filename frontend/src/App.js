import './App.css';
import Service from "./pages/Service";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Resume} from "./pages/Resume";
import {Projects} from "./pages/Projects";
import {ContactUs} from "./pages/ContactUs";
import {ResumeUpdateForm} from "./pages/ResumeUpdateForm";

function App() {
    return (
        <div className="App">

            <BrowserRouter>
                {/*<LanguageSwitcher/>*/}
                <ToastContainer/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/service" element={<Service/>}/>
                    <Route path="/resume" element={<Resume/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<ContactUs/>}/>
                    <Route path="/resumeUpdateForm" element={<ResumeUpdateForm/>}/>
                    {/*<Route path="/booking/:roomId" element={<BookingPage/>}/>*/}
                    {/*<Route path="/about/:aboutUsId" element={<UpdateAbout/>}/>*/}
                    {/*<Route path="/user/forgot-password" element={<ForgotPassword/>}/>*/}
                    {/*<Route path="/booked-rooms/:userId" element={<NormalUserRooms/>}/>*/}
                    {/*<Route path="/test-id" element={<MyComponent/>}/>*/}
                    {/*<Route path="/user" element={<PrivateRoutes/>}>*/}
                    {/*    <Route path="settings" element={<ListOfBookedRooms/>}/>*/}
                    {/*    <Route path="add-room" element={<AddRoom/>}/>*/}
                    {/*    <Route path="users" element={<Users/>}/>*/}
                    {/*    <Route path="update-room/:roomId" element={<UpdateRoom/>}/>*/}
                    {/*    <Route path="update-room-rate/:id" element={<UpdateRoomRates/>}/>*/}
                    {/*</Route>*/}

                </Routes>
            </BrowserRouter>
            {/*<Navebar />*/}
            {/*<Profile />*/}
            {/*<Service />*/}
            {/*<RecentWorks />*/}
            {/*<Footer />*/}
        </div>
    );
}

export default App;
