import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <br />
            <br />
            <br />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;