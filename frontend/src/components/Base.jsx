import Footer from "./Footer";
import CustomNavbar from "./CustomNavbar";
import {Navbar5} from "./NewCustomNavbar";
import Navbar6 from "./Navbar6";

const Base = ({title = "Welcome to our website", children}) => {
    return (
        <div className="p-0">
            {/*<CustomNavbar/>*/}
            {/*<Navbar5/>*/}
            <Navbar6/>

            {/*<BaseContainer>*/}
            {children}
            {/*</BaseContainer>*/}

            {/*<CustomFooter/>*/}
            <Footer/>
        </div>
    );
};

export default Base;