import img from "../../assets/images/r1.png"
import img1 from "../../assets/images/r2.png"
import img2 from "../../assets/images/r3.png"

const Residencies = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-20">
            <div className="border p-10">
                <img src={img} alt="" />
                <p className="text-xl font-semibold">Name:lakdjf </p>
                <p>Price:$1233</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus minus et cum est velit quos quas ullam, corrupti ad rerum.</p>
            </div>
            <div className="border p-10">
                <img src={img1} alt="" />
                <p className="text-xl font-semibold">Name:lakdjf </p>
                <p>Price:$1233</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus minus et cum est velit quos quas ullam, corrupti ad rerum.</p>
            </div>
            <div className="border p-10">
                <img src={img2} alt="" />
                <p className="text-xl font-semibold">Name:lakdjf </p>
                <p>Price:$1233</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus minus et cum est velit quos quas ullam, corrupti ad rerum.</p>
            </div>
        </div>
    );
};

export default Residencies;