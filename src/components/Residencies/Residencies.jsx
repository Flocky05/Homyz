

const Residencies = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-20 text-blue-600">
            <div className="mt-20 text-black">
                {data.map((data)=>{
                    <div>
                        <div>
                            <img src={data.img} alt="" />
                        </div>
                        <div>
                            <p>{data.name}</p>
                            <p>{data.review}</p>
                        </div>
                    </div>
                    console.log(data.name);
                })}
            </div>
        </div>
    );
};

const data=[
    {
    name:`Fuck`,
    img:`/../../src/assets/interior design/rome1.avif`,
    review:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus minus et cum est velit quos quas ullam, corrupti ad rerum.`,
    }
    
]
export default Residencies;