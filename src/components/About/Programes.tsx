import Image from "next/image";
import React from "react";

const constants = [
  {
    src: "/images/ireact.svg",
    alt: "Icon",
  },
  {
    src: "/images/inodejs.svg",
    alt: "Icon",
  },
  {
    src: "/images/idjango.svg",
    alt: "Icon",
  },
  {
    src: "/images/inextjs.svg",
    alt: "Icon",
  },
  {
    src: "/images/ikotlin.svg",
    alt: "Icon",
  },
  {
    src: "/images/iflutter.svg",
    alt: "Icon",
  },
];

const Programes = () => {
  return (
    <section className="py-20 justify-center grid grid-cols-3 gap-4 md:pl-40">
      {constants.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={100}
          height={100}
        />
      ))}
    </section>
  );
};

export default Programes;
