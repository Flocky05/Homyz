import img from "../../assets/People/people2.avif"
import img1 from "../../assets/People/people3.avif"
import img2 from "../../assets/People/people4.avif"


const PeopleSays = () => {
    return (
        <div className="m-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                    <div className="text-4xl font-bold p-4">
                        <h2 className="py-3">What people are </h2>
                        <h2 className="py-3">saying about us</h2>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem iure voluptatum est ab suscipit pariatur excepturi nostrum omnis ex, dolorem aspernatur! Perspiciatis ratione saepe porro. Accusantium facilis velit consequuntur.</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 m-4 overflow-hidden p-4 gap-7">
                    <div className="bg-gray-600 hover:bg-gradient-to-r from-gray-600 to to-black text-white m-8 p-4  w-full rounded-lg">
                        <h1 className="text-4xl font-bold text-blue-500">``</h1>
                        <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        <div className="flex gap-4 justify-items-center p-4">
                            <img className="w-10 h-10 rounded-full" src={img} alt="" />
                            <div>
                                <h3 className="text-lg ">Rahul</h3>
                                <p className="text-sm">May you sell or buy product with them.They are so much helpfull for everyone.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-600 hover:bg-gradient-to-r from-gray-600 to to-black text-white m-8 p-4 rounded-lg w-full">
                        <h1 className="text-4xl font-bold text-blue-500">``</h1>
                        <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        <div className="flex gap-4 justify-items-center p-4">
                            <img className="w-10 h-10 rounded-full" src={img1} alt="" />
                            <div>
                                <h3 className="text-lg ">Anik</h3>
                                <p className="text-sm">It is so beautiful sector where you easily findout a home for buy. They are beliveable person , may contract with them.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-600 hover:bg-gradient-to-r from-gray-600 to to-black text-white m-8 p-4  w-full rounded-lg">
                        <h1 className="text-4xl font-bold text-blue-500">``</h1>
                        <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        <div className="flex gap-4 justify-items-center p-4">
                            <img className="w-10 h-10 rounded-full" src={img2} alt="" />
                            <div>
                                <h3 className="text-lg ">Sonaira</h3>
                                <p className="text-sm">They are so helpful . They are working good all time.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default PeopleSays;