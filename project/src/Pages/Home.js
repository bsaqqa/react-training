import React from "react";


const Home = ()=>{

    return (
        <>
            {/* Hero section */}
            <section id="hero-section" className="max-w-6xl mx-auto px-2 md:px-4 lg:px-6 flex h-screen">
                <div className="flex-1 justify-center self-center">
                    <p className="flex content-start text-xl">
                        <span className=" text-gray-300 ">OUR GOAL</span>
                        <img src="images/Zigzag.svg" />
                    </p>
                    <h1 className="text-4xl	font-bold">
                        We Build Products
                        That Connects You With The World.
                    </h1>
                </div>
                <div className="flex-1">

                </div>
            </section>
        </>
    );
}

export default Home;