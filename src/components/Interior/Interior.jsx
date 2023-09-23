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

const Interior = () => {
    return (
        <div className="grid grid-cols-2 m-20 p-20">
            <img className="p-2" src={img} alt="" />
            <img className="p-2"  src={img1} alt="" />
            <img className="p-2"  src={img2} alt="" />
            <img  className="p-2" src={img3} alt="" />
            <img className="p-2"  src={img4} alt="" />
            <img className="p-2"  src={img5} alt="" />
            <img className="p-2"  src={img6} alt="" />
            <img className="p-2"  src={img7} alt="" />
            <img className="p-2"  src={img8} alt="" />
            <img className="p-2"  src={img9} alt="" />
            <img className="p-2"  src={img10} alt="" />
        </div>
    );
};

export default Interior;