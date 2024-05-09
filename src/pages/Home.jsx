import Carousel from "../components/Carousel";
import TabCategories from "../components/TabCategories";

const Home = () => {
    return (
        <div className="md:space-y-10 space-y-7 w-11/12 max-w-7xl container mx-auto">
            <div className="flex min-h-[calc(100vh-200px)] items-center justify-center">
                <Carousel />
            </div>
            <div className="min-h-[calc(100vh-200px)">
                <TabCategories />
            </div>
        </div>
    );
};

export default Home;