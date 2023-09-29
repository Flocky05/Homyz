import img from "../../assets/interior design/rome1.avif"
import img1 from "../../assets/interior design/rome2.avif"
import img2 from "../../assets/interior design/rome3.avif"
import img3 from "../../assets/interior design/rome4.avif"
import img4 from "../../assets/interior design/rome5.avif"
import img5 from "../../assets/interior design/rome6.avif"
import img6 from "../../assets/interior design/rome7.avif"
import img7 from "../../assets/interior design/rome8.avif"
import img8 from "../../assets/interior design/rome9.avif"
import img9 from "../../assets/interior design/rome10.avif"
import img10 from "../../assets/interior design/rome11.avif"
import img11 from "../../assets/interior design/rome12.avif"

const Interior = () => {
    return (
        <div>
            <h3 className="text-3xl font-bold p-10 text-center">Our <span className="text-yellow-400">Interior</span> Design</h3>
            <div className="grid grid-cols-2 lg:mx-20 lg:px-20">
            <img className="p-2 opacity-70 hover:opacity-100  transition duration-700 ease-in-out" src={img} alt="" />
            <img className="p-2 opacity-70 hover:opacity-100 transition duration-700 ease-in-out"  src={img1} alt="" />
            <img className="p-2 opacity-70 hover:opacity-100 transition duration-700 ease-in-out"  src={img2} alt="" />
            <img className="p-2 opacity-70 hover:opacity-100 transition duration-700 ease-in-out" src={img3} alt="" />
            <img className="p-2 opacity-70 hover:opacity-100 transition duration-700 ease-in-out"  src={img4} alt="" />
            <img className="p-2 opacity-70 hover:opacity-100 transition duration-700 ease-in-out"  src={img5} alt="" />
            <img className="p-2 opacity-70 hover:opacity-100 transition duration-700 ease-in-out"  src={img6} alt="" />
            <img className="p-2 opacity-70 hover:opacity-100 transition duration-700 ease-in-out"  src={img7} alt="" />
            <img className="p-2 opacity-70 hover:opacity-100 transition duration-700 ease-in-out"  src={img8} alt="" />
            <img className="p-2 opacity-70 hover:opacity-100 transition duration-700 ease-in-out"  src={img9} alt="" />
            <img className="p-2 opacity-70 hover:opacity-100 transition duration-700 ease-in-out"  src={img10} alt="" />
            <img className="p-2 opacity-70 hover:opacity-100 transition duration-700 ease-in-out"  src={img11} alt="" />
        </div>
        </div>
    );
};

export default Interior;