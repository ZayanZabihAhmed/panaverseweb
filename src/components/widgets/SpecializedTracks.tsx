import React from "react";
import Wrapper from "@/components/shared/Wrapper";


const SpecializedTracks =() =>{
    return(
        <section>
            <Wrapper>
                 {/* header */}
                 <div>
                 <h2 className="text-4xl font-bold">Specialized Tracks:</h2>
                 <p className="mt-10 text-lg text-slate-600">After completing the first three quarters the participants  will select <br /> one or more specializations consisting of two courses each: </p>
                 </div>
                 <div className="mt-10">
                 {/* content left */}
                 <div className="shadow-xl rounded-xl border border-teal-100 py-8 px-8">
                    <h4  className="text-teal-700 font-semibold text-lg mt-4">Specialized Program</h4>
                    <h3 className="mt-3 text-4xl font-bold">Web 3.0 (Blockchain) and Metaverse <br /> Specialization</h3>
                    <p className="mt-3 text-lg text-slate-600">This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
</p>                 </div>
                    <button className="text-teal-700 text-xl mt-4 underline flex gap-x-2 items-end">Learn More<svg className="mb-1.5" width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2"/>
</svg>

                    </button>
                 </div>

                 {/* content right */}
            </Wrapper>
        </section>
    )
}

export default SpecializedTracks