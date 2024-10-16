import logo from './logo.svg';
import './App.css';
import Navebar from "./component/Navebar";
import Profile from "./pages/Profile";
import Service from "./pages/Service";
import RecentWorks from "./pages/RecentWorks";
import Footer from "./component/Footer";

function App() {
  return (
      <div className="App">
        <Navebar />
        <Profile />
        <Service />
        <RecentWorks />
        <Footer />
      </div>
  );
}

export default App;
