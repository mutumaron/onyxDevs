import { Facebook, Instagram, LinkedinIcon, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="lg:px-36 py-2 flex px-12 flex-col gap-10 md:items-center">
      <hr className="border md:w-full" />
      <Link href={"/"} className="cursor-pointer">
        <Image
          src={"/images/logo-black.svg"}
          alt="logo"
          width={100}
          height={100}
        />
      </Link>
      <p className="text-gray-400 md:text-center">
        At Onyx Web Solutions, we specialize in creating innovative and
        customized web and mobile solutions tailored to meet the unique needs of
        our clients. With a team of skilled developers, designers, and digital
        strategists, we are dedicated to delivering high-quality, user-friendly
        websites and applications that drive growth and enhance user experience.
      </p>
      <div className="flex justify-between px-5 md:gap-4">
        <a
          href={"https://x.com/web_wiz2"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="text-[#F7F7FF] bg-[#131112] p-2 w-10 h-10 cursor-pointer hover:bg-[#F7F7FF] hover:text-[#131112] transition" />
        </a>
        <a
          href={"https://www.linkedin.com/in/ronny-mutembei-23886b320/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="text-[#F7F7FF] bg-[#131112] p-2 w-10 h-10 cursor-pointer hover:bg-[#F7F7FF] hover:text-[#131112] transition" />
        </a>
        <a
          href={"https://www.facebook.com/profile.php?id=61562092225663"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="text-[#F7F7FF] bg-[#131112] p-2 w-10 h-10 cursor-pointer hover:bg-[#F7F7FF] hover:text-[#131112] transition" />
        </a>
      </div>
      <p className="text-gray-400 text-center pb-2 text-sm">
        &copy; 2024 Onyx Web Solutions. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
