
import { Link } from "react-router-dom";
import img from "../../assets/images/logo.png"
const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-5 bg-[#031B34]">
            <Link to="/"><img className="h-10" src={img} alt="" /></Link>
            <div className="flex justify-around text-white w-3/5 text-lg font-semibold">
                <Link to="/residencies">Residencies</Link>
                <Link to="/value">Our Value</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/started">Get Started</Link>
                <Link to="/" className="text-white px-8 py-2  rounded-lg  bg-red-500">Learn More</Link>
            </div>
        </div>
    );
};

export default Navbar;