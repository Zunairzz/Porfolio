import Footer from "./Footer";
import Navebar from "./Navebar";

const Base = ({title = "Welcome to our website", children}) => {
    return (
        <div className="p-0">
            <Navebar/>

            {/*<BaseContainer>*/}
            {children}
            {/*</BaseContainer>*/}

            {/*<CustomFooter/>*/}
            <Footer/>
        </div>
    );
};

export default Base;