import React from "react";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import HeroPoster from "@/assets/images/hero-poster.png"
import Button from "@/components/shared/Button";

const Hero =() =>{
    return (
        <section className="">
        
        <Wrapper>
            <div className="flex flex-col md:flex-row items-center">
                {/* Left Side  */}
                <div className="flex-1">
                    <h4 className="text-teal-700 font-semibold text-lg mt-4">Presidential Initiative for Artificial Intelligence & Computing(PIAIC)</h4>
                    <h1 className="text-5xl sm:text-6xl font-bold">Certified Web 3.0 and Metaverse Developer</h1>
                    <p className="mt-6 text-lg text-slate-600" > 
                        A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
                        </p>
                        <p className="mt-3 text-lg text-slate-600" >
                        Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
                        </p>
                    <div className="mt-5">
                        <Button text={"Enroll Now"}/>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex-1 hover:scale-105 duration-1000">
                    <Image src={HeroPoster} alt="Hero Poster"/>
                </div>
            </div>


        </Wrapper>
        
        </section>

       
    )
}

export default Hero    