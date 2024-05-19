import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Sai from "./Sai";
import Leader from "./Leader";
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Race Family | Home</title>
            </Helmet>
            <Banner></Banner>
            <Sai></Sai>
            <Leader></Leader>
        </div>
    );
};

export default Home;