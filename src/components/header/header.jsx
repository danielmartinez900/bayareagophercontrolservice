import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/mole-logo.jpg";

export const Header = () => {
  return (
    <nav className="sticky flex flex-col top-0 bg-white h-[100px] justify-between border-b-2">
      <div className="flex bg-green-800 w-full justify-between px-3">
        <p className="text-white text-sm md:text-lg text-center">
          South Bay: (408) 326-9992
        </p>
        <p className="text-white text-sm md:text-lg text-center">
          Penninsula: (925) 273-3003
        </p>
        <p className="text-white text-sm md:text-lg text-center">
          East Bay: (925) 273-3003
        </p>
      </div>

      <div className="flex justify-around items-center space-x-3 md:space-x-0">
        <div>
          <a href="/about-us">
            <p className="text-sm md:text-lg text-center">About Us</p>
          </a>
        </div>
        <div>
          <a href="/blogs">
            <p className="text-sm md:text-lg">Blog</p>
          </a>
        </div>
        <div className="self-center">
          <a href="/">
            <Image src={logo} width={250} alt="logo"/>
          </a>
        </div>
        <div>
          <p className="text-sm md:text-lg text-center">
            1-866-960-moles(6653)
          </p>
        </div>
      </div>
    </nav>
  );
};
