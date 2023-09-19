
import img from "../../assets/images/location-48.png"
import img1 from "../../assets/images/hero-image.png"
const Home = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-10 lg:text-start text-center">
                <div className="text-4xl font-bold">
                    <h2>Discover</h2>
                    <h2>Most Suitable</h2>
                    <h2>Property</h2>
                </div>
                <p className="py-10">Find a variety of properties that suit you very easilty
                Forget all difficulties in finding a residence for you</p>
                <div className="relative">
                    <img className="absolute h-8 mt-2 ml-24 lg:ml-2" src={img} alt="" /> 
                    <input type="text" className="w-3/5 bg-white h-14 text-black rounded-lg pl-10" placeholder="Enter location" />
                    <button className="bg-red-600 text-white px-7 lg:px-9 py-3 rounded-md absolute -ml-28 lg:-ml-32 mt-1">Search</button>
                </div>
            </div>
            <img className="w-3/5 rounded-t-full border-8 border-indigo-500 m-20" src={img1} alt="" />
        </div>
    );
};

export default Home;