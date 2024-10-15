import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import Porfile from "./pages/Porfile";
import Service from "./pages/Service";
import RecentWorks from "./pages/RecentWorks";
import Footer from "./component/Footer";

function App() {
  return (
      <div className="App">
        <Header />
        <Porfile />
        <Service />
        <RecentWorks />
        <Footer />
      </div>
  );
}

export default App;
