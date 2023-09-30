import img from "../../assets/People/people2.avif"
import img1 from "../../assets/People/people3.avif"
import img2 from "../../assets/People/people4.avif"


const PeopleSays = () => {
    return (
        <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                    <div className="text-4xl font-bold p-4">
                        <h2 className="py-3">What people are </h2>
                        <h2 className="py-3">saying about us</h2>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem iure voluptatum est ab suscipit pariatur excepturi nostrum omnis ex, dolorem aspernatur! Perspiciatis ratione saepe porro. Accusantium facilis velit consequuntur.</p>
                    </div>
                </div>
                <div>
                    <div className="hover:bg-gradient-to-r from-gray-600 to to-black text-white m-8 p-4  w-1/4 rounded-lg">
                        <h1 className="text-4xl font-bold">``</h1>
                        <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        <div className="flex gap-4 justify-items-center p-4">
                            <img className="w-10 h-10 rounded-full" src={img} alt="" />
                            <div>
                                <h3 className="text-lg ">Rahul</h3>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default PeopleSays;