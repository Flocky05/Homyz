import img from "../../assets/teamMembers/man1.avif"
import img1 from "../../assets/teamMembers/man2.avif"
import img2 from "../../assets/teamMembers/man3.avif"
import img3 from "../../assets/teamMembers/man4.avif"
import img4 from "../../assets/teamMembers/man5.avif"
import img5 from "../../assets/teamMembers/man6.avif"
import img6 from "../../assets/teamMembers/man7.avif"
import img8 from "../../assets/teamMembers/model1.avif"
import img9 from "../../assets/teamMembers/model2.avif"
import img10 from "../../assets/teamMembers/model3.avif"
import img11 from "../../assets/teamMembers/hr1.avif"
import img12 from "../../assets/teamMembers/hr2.avif"
import img13 from "../../assets/teamMembers/women1.avif"
import img14 from "../../assets/teamMembers/women2.avif"
import img15 from "../../assets/teamMembers/women3.avif"
import img16 from "../../assets/teamMembers/women4.avif"
import img17 from "../../assets/teamMembers/women5.avif"


const Contract = () => {
    return (
        <div>
            <h3 className="text-3xl font-semibold text-center">Our <span className="text-yellow-400">Team</span> Members</h3>
            <div className="grid grid-cols-6 p-20 relative">
                <img className="w-64  rounded-full" src={img} alt="" />
                <img className="w-64  rounded-full" src={img1} alt="" />
                <img className="w-64  rounded-full" src={img2} alt="" />
                <img className="w-64  rounded-full" src={img3} alt="" />
                <img className="w-64  rounded-full" src={img4} alt="" />
                <img className="w-64  rounded-full" src={img5} alt="" />
                <img className="w-64  rounded-full " src={img6} alt="" />
                <img className="w-64  rounded-full " src={img8} alt="" />
                <img className="w-64  rounded-full" src={img9} alt="" />
                <img className="w-64  rounded-full" src={img10} alt="" />
                <img className="w-64  rounded-full" src={img11} alt="" />
                <img className="w-64  rounded-full" src={img12} alt="" />
                <img className="w-64  rounded-full" src={img13} alt="" />
                <img className="w-64  rounded-full" src={img14} alt="" />
                <img className="w-64  rounded-full" src={img15} alt="" />
                <img className="w-64  rounded-full" src={img16} alt="" />
                <img className="w-64  rounded-full" src={img17} alt="" />
            </div>
        </div>
    );
};

export default Contract;