import React from "react";
import Logo from "/public/logo.png"
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/shared/Wrapper";

const Header = () => {
    return(
        <Wrapper>
        <header className="flex justify-between  bg-white py-4 sticky top-0 items-center">
            {/* Logo */}
            <div className="hover:scale-105 duration-500">
            {/* <h2 className="text-xl font-bold">Panaverse Dao</h2> */}
            <Image src={Logo} alt="Panaverse Dao Logo"width={100} height={100}/>
            </div>
            {/* Navigation Bar */}
            <ul className="flex space-x-8 font-medium ">
                <li className="hover:scale-105 duration-500">
                    <Link href={"/"}>
                        Home
                    </Link>
                    </li>
                <li className="hover:scale-105 duration-500">
                    <Link href={"/courses"}>
                        Courses
                    </Link>
                    </li>
            </ul>


        </header>
        </Wrapper>
    )
}

export default Header