"use client";
import React, { useContext, useEffect, useState } from "react";
import { NavigationMenuDemo } from "../CustomUI/NavigationMenuDemo";
import MyThemeContext from "@/store/ThemeContext";
import {
  BookType,
  ChevronDown,
  ChevronUp,
  Database,
  Globe,
  Menu,
  PhoneCall,
  ShoppingCart,
  Smartphone,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";

const NavBar = () => {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChevronOpen, setIsChevronOpen] = useState(false);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }

  function toggleMenu(): void {
    setIsMenuOpen((prev) => !prev); // Toggle the menu visibility
  }

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
    setIsChevronOpen(false); // Ensure chevron is closed
  };

  function handleLinkClick(): void {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup function to reset overflow when the component unmounts or menu closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <section className="lg:px-36 py-3 flex px-12 fixed top-0 w-full z-50 bg-[#F7F7FF] shadow-sm items-center">
      <div className="flex-1">
        <Link href={"/"} className="cursor-pointer">
          <Image
            src={"/images/logo-black.svg"}
            alt="logo"
            width={75}
            height={75}
          />
        </Link>
      </div>
      <div className="flex-1 justify-end items-end hidden md:flex">
        <NavigationMenuDemo />
      </div>
      <div className="pl-20 md:pr-0 pr-5">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <PhoneCall className="cursor-pointer"/>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Book a Call Now</AlertDialogTitle>
              <AlertDialogDescription>
                {" "}
                <a href="tel:+254796509425">Call us at 0796509425</a>
              </AlertDialogDescription>
              <AlertDialogDescription>
                <a href="mailto:mutembeironny11@gmail.com">
                  Email us at onyxDevs@gmail.com
                </a>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div
        className={`fixed inset-0 bg-[#F7F7FF] flex flex-col items-start gap-7 justify-start min-h-screen transition-transform duration-300 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 overflow-auto"
            : "translate-x-full overflow-hidden"
        } md:hidden z-50`}
      >
        <div className="flex items-between px-12 justify-between w-full py-3 shadow">
          <Link href={"/"} className="cursor-pointer">
            <Image
              src={"/images/logo-black.svg"}
              alt="logo"
              width={75}
              height={75}
            />
          </Link>
          <button onClick={() => setIsMenuOpen(false)} className="">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col gap-2 px-7 w-full">
          <Link
            href="/"
            className="p-2 text-xl text-gray-700 font-semibold border-b w-full rounded -md hover:bg-white"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={handleLinkClick}
            className="p-2 text-xl font-semibold text-gray-700 border-b w-full rounded -md hover:bg-white"
          >
            About
          </Link>
          <Link
            href="/blog"
            onClick={handleLinkClick}
            className="p-2 text-xl font-semibold text-gray-700 border-b w-full rounded -md hover:bg-white"
          >
            Blogs
          </Link>
          <Link
            href="/pricing"
            onClick={handleLinkClick}
            className="p-2 text-xl font-semibold text-gray-700 border-b w-full rounded -md hover:bg-white"
          >
            Pricing
          </Link>
          <div
            className="p-2 text-xl border-b w-full rounded -md flex flex-col gap-5 cursor-pointer"
            onClick={() => setIsChevronOpen(!isChevronOpen)}
          >
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-gray-700">Features</h1>
              <button
                onClick={() => setIsChevronOpen(!isChevronOpen)}
                className="md:hidden"
              >
                {isChevronOpen ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronDown size={24} />
                )}
              </button>
            </div>
            <div
              className={`${
                isChevronOpen
                  ? " bg-[#F7F7FF] flex flex-col items-start gap-7 justify-start"
                  : "hidden"
              } md:hidden z-50`}
            >
              <Link
                href="/website"
                onClick={handleLinkClick}
                className="p-2 text-xl border-b w-full rounded -md hover:bg-white flex items-center gap-4"
              >
                <Globe className="text-gray-700" />
                <div className="">
                  <h1 className="text-sm font-semibold text-gray-700 pb-1">
                    Web Design
                  </h1>
                  <p className="text-sm text-gray-600">
                    Fully Functional Modern Websites
                  </p>
                </div>
              </Link>
              <Link
                href="/mobile"
                onClick={handleLinkClick}
                className="p-2 text-xl border-b w-full rounded -md hover:bg-white flex items-center gap-4"
              >
                <Smartphone className="text-gray-700" />
                <div>
                  <h1 className="text-sm font-semibold text-gray-700 pb-1">
                    Mobile Design
                  </h1>
                  <p className="text-sm text-gray-600">
                    Fully Functional Modern Websites
                  </p>
                </div>
              </Link>
              <Link
                href="/database"
                onClick={handleLinkClick}
                className="p-2 text-xl border-b w-full rounded -md  flex items-center hover:bg-white gap-4"
              >
                <Database className="text-gray-700" />
                <div>
                  <h1 className="text-sm font-semibold text-gray-700 pb-1 ">
                    Database Design
                  </h1>
                  <p className="text-sm text-gray-600 hover:text-black">
                    Fully Functional Modern Websites
                  </p>
                </div>
              </Link>
              <Link
                href="/writing"
                onClick={handleLinkClick}
                className="p-2 text-xl border-b w-full rounded -md hover:bg-white flex items-center gap-4"
              >
                <BookType className="text-gray-700" />
                <div>
                  <h1 className="text-sm font-semibold text-gray-700 pb-1 ">
                    Technical Writing
                  </h1>
                  <p className="text-sm text-gray-600 ">
                    Fully Functional Modern Websites
                  </p>
                </div>
              </Link>
              <Link
                href="/"
                onClick={handleLinkClick}
                className="p-2 text-xl  border-b w-full rounded -md hover:bg-white flex items-center gap-4"
              >
                <ShoppingCart className="text-gray-700" />
                <div>
                  <h1 className="text-sm font-semibold text-gray-700 pb-1 ">
                    Products
                  </h1>
                  <p className="text-sm text-gray-600 ">
                    Fully Functional Modern Websites
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="p-2 text-xl font-semibold text-gray-700 pb-5 border-b w-full rounded -md hover:bg-white"
          >
            Contact us
          </Link>
        </div>
      </div>
      <button onClick={handleMenuToggle} className="md:hidden">
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </section>
  );
};

export default NavBar;
