const Footer = () => {
    return (
        <div className="bg-[#031B34] w-full text-white">
            <div className="flex flex-col items-center p-10 lg:p-20 text-center">
                <h2 className="text-4xl text-center font-semibold">Do you want to step in to the </h2>
                <h2 className="text-4xl text-center ">future before others</h2>
                <button className="px-8 py-3 border w-3/5 lg:w-1/4 text-white m-10 lg:m-20 hover:bg-orange-600">Request Early access</button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 px-20 p-10 ">
                <div>
                    <a className="text-3xl font-bold" href="/">Homyz</a>
                    <p className="py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sequi.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Links</h3>
                    <div className="flex flex-col">
                        <a className="py-3" href="/">Overnears</a>
                        <a className="py-3" href="/">Social Media</a>        
                        <a className="py-3" href="/">Counters</a>        
                        <a className="py-3" href="/">Contact</a>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Company</h3>
                    <div className="flex flex-col">
                        <a className="py-3" href="/">Terms & Conditions</a>
                        <a className="py-3" href="/">Privacy Policy</a>        
                        <a className="py-3" href="/">Contact</a>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Get in touch</h3>
                    <div className="py-4">
                        <p>Crechterwoord K12</p>
                        <p>182 DK Alknjkcb</p>
                        <p>01799622217</p>
                        <p>md.rakibul.islam.0501@gmail.com</p>
                    </div>
                </div>
                   
            </div>
        </div>
    );
};

export default Footer;