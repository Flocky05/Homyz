
import img from "../../assets/images/logo.png"
const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-5">
            <a href="/"><img className="h-10" src={img} alt="" /></a>
            <div className="flex justify-around text-white w-3/5 text-lg font-semibold">
                <a href="/residencies">Residencies</a>
                <a href="/value">Our Value</a>
                <a href="/contact">Contact Us</a>
                <a href="/started">Get Started</a>
                <a href="/" className="text-white px-8 py-2  rounded-lg  bg-blue-500">Learn More</a>
            </div>
        </div>
    );
};

export default Navbar;