import React from "react";
import styled from 'styled-components'

import Button from '../Components/Button'
// const Button = styled.button`
//   @apply text-white font-medium border-2 border-primary-900 bg-primary-900 px-6 lg:px-8 py-2
// `;
//



const Home = ()=>{
    return (
        <>
            {/* Hero section */}
            <section id="hero-section" className="relative  h-screen">
                <div className="flex md:h-screen max-w-6xl mx-auto px-5 md:px-4 py-20 mt-10 md:mt-0 md:py-2 lg:px-6">

                    <div className="md:flex-1 justify-center self-center">
                        <div className="flex items-center text-lg mb-2">
                            <span className="text-gray-300 mr-4">OUR GOAL</span>
                            <img className="h-4" src="images/Zigzag.svg" />
                        </div>
                        <h1 className="text-3xl	font-bold mb-10">
                            We Build Products
                            That Connects You With The World.
                        </h1>
                        <Button className="uppercase">Get in touch</Button>
                    </div>
                    <div className="md:flex-1">
                    </div>
                </div>

                <img className="md:absolute right-0 top-0 bottom-0 max-h-auto md:max-h-screen w-full px-5 md:px-0 md:w-1/2 object-cover  z-[-1] z--1"
                     src={require('../assets/images/Hero-image.jpg').default}/>
            </section>

            {/*<AboutSection/>*/}
        </>
    );
}

export default Home;