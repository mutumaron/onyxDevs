import React from "react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

const About = () => {
  return (
    <section className="flex flex-col gap-10 lg:flex-row">
      <div className="flex flex-col gap-5 flex-1">
        <h3 className="font-bold text-xl lg:w-3/4">
          OUR MISSION:TO BOOST YOUR ONLINE PRESENCE
        </h3>
        <p>
          Our team of skilled professionals is dedicated to transforming your
          vision into a dynamic online presence, whether it’s through an
          engaging website or a user-friendly mobile app. We believe that
          technology should work seamlessly to enhance your business, and we’re
          here to make that happen.
        </p>
        <p>
          Our approach to web development combines creativity with technical
          expertise, ensuring that every website we create is not only visually
          stunning but also highly functional. From responsive designs to
          interactive features, we build websites that captivate your audience
          and drive results.
        </p>
        <p>
          With a track record of successful projects and satisfied clients, we
          are confident in our ability to deliver results that exceed your
          expectations. Whether you need a robust website, a cutting-edge mobile
          app,
        </p>
        <p>
          In the mobile arena, we craft intuitive apps that offer exceptional
          user experiences across various devices and platforms.{" "}
        </p>
        <Link href={"/about"} className={buttonVariants()}>
          About Onyx Developers
        </Link>
      </div>
      <div className="flex-1 flex justify-end bg-white">
        <video src="/videos/web-creator.mp4" autoPlay loop muted playsInline />
      </div>
    </section>
  );
};

export default About;
