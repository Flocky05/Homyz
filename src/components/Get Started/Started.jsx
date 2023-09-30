
import img1 from "../../assets/getstart/paypal-48.png"
import img2 from "../../assets/getstart/apple.png"
import img3 from "../../assets/getstart/visa-50.png"
import img4 from "../../assets/getstart/shopify-50.png"
import scan from "../../assets/getstart/scan-64.png"
import charts from "../../assets/getstart/charts.png"
import PeopleSays from "../PeopleSays/PeopleSays"
const Started = () => {
    return (
        <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center p-20 m-20">
                    <div>
                        <div className="text-white text-3xl text-bold">
                            <h2 className="py-4">Find a better card deal </h2>
                            <h2 className="py-4">in few easy steps.</h2>
                        </div>
                        <p className="py-4">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                        <button className="bg-gradient-to-r from-gray-700 to-gray-300 px-6 py-2 rounded-lg text-white font-semibold mt-6">Get Start</button>
                    </div>
                    <div className="grid items-center place-content-center content-center relative ml-8">
                        <div className="border-4 border-gray-500 rounded-full absolute h-32 w-32 left-32"> </div>
                        <div className="border-4 border-gray-500 rounded-full absolute h-64 w-64 left-16"></div>
                        <div className="border-8 border-gray-500 rounded-full absolute h-96 w-96 left-0"></div>
                        {/* card1 start */}
                        <div className="bg-gradient-to-r from-gray-600 to to-black text-white m-8 p-4 absolute w-1/4 rounded-lg -mt-48">
                                <img className="w-6 invert rounded-lg mx-auto" src={scan} alt="" />
                                <h3 className="text-md text-center">Scan your Id Card</h3>
                                <p className="text-sm text-center">Lorem ipsum dolor sit, amet  Quisquam.</p>
                        </div>
                        {/* Card2 start  */}
                        <div className="bg-gradient-to-r from-gray-600 to to-black text-white absolute m-4 p-4 w-2/5 rounded-lg -mt-64 ml-60">
                                <h3 className="text-md text-center py-2">Online Analysis</h3>
                                <p className="text-sm text-center ">Lorem ipsum dolor  fugiat!</p>
                                <img className="mt-2" src={charts} alt="" />
                        </div>
                        {/* Card3 start */}
                        <div className="bg-gradient-to-r from-gray-600 to to-black text-white m-8 p-4 absolute w-2/3 rounded-lg mt-64 ml-36">
                                <h3 className="text-md text-center">Payment Method</h3>
                                <div className="grid grid-cols-4 p-4 justify-items-center">
                                    <img  className="w-10 bg-white rounded-lg p-2" src={img1} alt="" />
                                    <img className="w-10 bg-white rounded-lg p-2" src={img2} alt="" />
                                    <img className="w-10 bg-white rounded-lg p-2" src={img3} alt="" />
                                    <img className="w-10 bg-white rounded-lg p-2" src={img4} alt="" />
                                </div>
                        </div>
                    </div>
                </div>
                <PeopleSays></PeopleSays>
        </div>
    );
};

export default Started;