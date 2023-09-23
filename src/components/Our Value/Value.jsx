
import img from "../../assets/images/location.avif"

const Value = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 p-20 items-center">
            <div>
               <img className="w-full p-10 opacity-90 hover:opacity-100" src={img} alt="" />
            </div>
            <div className="text-center p-10 lg:p-20">
                <h2 className="text-3xl font-bold p-10 text-blue-300">Your Location</h2>
                <p className="pt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quod natus hic magni, esse dolores veniam, ducimus voluptatum sequi quos ea consectetur! Similique perferendis iste odio modi, pariatur tempora exercitationem!</p>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quis, quia quas alias, laboriosam mollitia neque eligendi eum, facere tempore illum id? Deserunt odit qui veritatis doloremque temporibus consequatur assumenda?</p>
            </div>
        </div>
    );
};

export default Value;