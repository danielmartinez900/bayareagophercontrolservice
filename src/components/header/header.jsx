import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/mole-logo.jpg";

export const Header = () => {
  return (
    <nav className="sticky flex flex-col top-0 bg-white h-[100px] border-b-2">
      <div className="flex bg-green-800 h-1/4 w-full justify-around">
        <p className="text-white font-medium">South Bay: (408) 326-9992</p>
        <p className="text-white font-medium">Penninsula: (925) 273-3003</p>
        <p className="text-white font-medium">East Bay: (925) 273-3003</p>
      </div>
      <div className="w-full flex justify-around items-center">
        <a href="/about-us">
          <p>About Us</p>
        </a>
        <a href="/blogs">
          <p>Blog</p>
        </a>
        <a href="/">
          <Image src={logo} width={250} alt="logo" />
        </a>
        <p>1-866-960-moles(6653)</p>
      </div>
    </nav>
  );
};
