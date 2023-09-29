
import img1 from "../../assets/getstart/paypal-48.png"
import img2 from "../../assets/getstart/apple.png"
import img3 from "../../assets/getstart/visa-50.png"
import img4 from "../../assets/getstart/shopify-50.png"
const Started = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center p-20 m-20">
            <div>
                <div className="text-white text-3xl text-bold">
                    <h2 className="py-4">Find a better card deal </h2>
                    <h2 className="py-4">in few easy steps.</h2>
                </div>
                <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                <button className="bg-gradient-to-r from-green-300 to-blue-300 px-6 py-2 rounded-lg text-black mt-4">Get Start</button>
            </div>
            <div className="relative ml-8">
                <div className="p-8 border-4 border-green-500 rounded-full absolute ml-52 -mt-32"> </div>
                <div className="p-20 border-4 border-green-500 rounded-full absolute ml-40 -mt-44"></div>
                <div className="p-32 border-8 border-green-500 rounded-full absolute ml-28 -mt-56"></div>
                <div className="bg-gradient-to-r from-gray-600 to to-black text-white m-8 p-4 absolute w-1/4 rounded-lg -mt-48">
                        <h3 className="text-md text-center">Scan your Id Card</h3>
                        <p className="text-sm text-center">Lorem ipsum dolor sit, amet  Quisquam.</p>
                </div>
                <div className="bg-gradient-to-r from-gray-600 to to-black text-white m-8 p-4 absolute w-2/5 rounded-lg -mt-64 ml-60">
                        <h3 className="text-md text-center">Scan your Id Card</h3>
                        <p className="text-sm text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam corrupti vero culpa harum  voluptates corporis tenetur fugiat!</p>
                </div>
                <div className="bg-gradient-to-r from-gray-600 to to-black text-white m-8 p-4 absolute w-2/3 rounded-lg -mt-12 ml-48">
                        <h3 className="text-md text-center">Payment Method</h3>
                        <div className="grid grid-cols-4 p-4">
                            <img className="w-10" src={img1} alt="" />
                            <img className="w-10" src={img2} alt="" />
                            <img className="w-10" src={img3} alt="" />
                            <img className="w-10" src={img4} alt="" />
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Started;