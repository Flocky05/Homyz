
import img from "../../assets/images/logo.png"
const Navbar = () => {
    return (
        <div className="flex items-center">
            <img src={img} alt="" />
            <div className="flex justify-around text-white w-full ">
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