import Banner from "../Banner/Banner";
import GetToKnowUs from "../GetToKnowUs/GetToKnowUs";
import PopularItems from "../PopularItems/PopularItems";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularItems></PopularItems>
            <GetToKnowUs></GetToKnowUs>
        </div>
    );
};

export default Home;