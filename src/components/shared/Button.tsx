import React, { FC } from "react";


const Button:FC<{text:string}> = ({text}) =>{
    
    return (
        <button className="bg-teal-800 text-white px-8 py-4 rounded-full
         hover:shadow-lg text-lg font-medium hover:scale-105 duration-500
        ">{text}</button>
    )
}

export default Button  
