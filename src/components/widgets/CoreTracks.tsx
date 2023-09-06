import React from "react";
import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";


const CoreTracks =()=>{
    return (
        <section className="mt-16 lg:mt-24">
            <Wrapper>
            
          
            {/* content */}
            <div className="max-w-screen-sm">
                <h4 className="text-teal-700 font-semibold text-lg mt-4">Program of Studies</h4>
                <h2 className="text-4xl font-bold">Core Courses <br />(Common in All Specializations):</h2>
                <p className="mt-3 text-lg text-slate-600">Every participant of the program will start by completing the following three core courses:</p>
                <div className="mt-5">
                    <Button text="Learn More"/>
                </div>

           </div>
           {/* Boxes */}
           <div className="my-20 flex gap-x-4 max-w-screen-xl">
            <div className="hover:scale-105 duration-500 border rounded-md w-4/12 relative px-8 py-24 flex flex-col ">
                <h4 className="font-bold text-lg">Quarter I</h4>
                <p className="mt-2 text-slate-600">CS-101: Object-Oriented Programming using TypeScript</p>
                <div className="absolute text-gray-200 -top-10 right-10 text-[170px] font-bold -z-10">1</div>
            </div>
            <div className="hover:scale-105 duration-500 border rounded-md w-4/12 relative px-8 py-24 flex flex-col">
                <h4 className="font-bold text-lg">Quarter II</h4>
                <p className="mt-2 text-slate-600">W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
                <div className="absolute text-gray-200 -top-10 right-10 text-[170px] font-bold -z-10">2</div>
            </div>
            <div className="hover:scale-105 duration-500 border rounded-md w-4/12 relative px-8 py-24 flex flex-col">
                <h4 className="font-bold text-lg">Quarter III</h4>
                <p className="mt-2 text-slate-600">$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</p>
                <div className="absolute text-gray-200 -top-10 right-10 text-[170px] font-bold -z-10">3</div>
            </div>
           </div>
            </Wrapper>

        </section>
    )
}

export default CoreTracks