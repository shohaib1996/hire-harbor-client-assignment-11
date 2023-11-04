import Footer from "../../SharedComponents/Footer/Footer";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Banner></Banner>
            </div>
            <div>Hello Job seeker</div>
            <Footer></Footer>
        </div>
    );
};

export default Home;