

const Started = () => {
    return (
        <div className="grid grid-cols-2 items-center p-20 m-20">
            <div>
                <div className="text-white text-3xl text-bold">
                    <h2>Find a better card deal </h2>
                    <h2>in few easy steps.</h2>
                </div>
                <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                <button className="bg-gradient-to-r from-green-300 to-blue-300 px-6 py-2 rounded-lg text-black mt-4">Get Start</button>
            </div>
            <div className="relative ml-8">
                <div className="p-8 border-4 border-green-500 rounded-full absolute ml-52 -mt-32"></div>
                <div className="p-20 border-4 border-green-500 rounded-full absolute ml-40 -mt-44"></div>
                <div className="p-32 border-8 border-green-500 rounded-full absolute ml-28 -mt-56"></div>
            </div>
        </div>
    );
};

export default Started;