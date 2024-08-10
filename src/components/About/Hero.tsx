import { Dot } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="pt-12">
      <div className="flex flex-col gap-10 md:items-center ">
        <div className="border-2 rounded-lg flex justify-center items-center px-2">
          <Dot className="text-purple-600 w-8 h-8" />
          <h2 className="font-semibold">About Onyx Developers</h2>
        </div>
        <div className="flex flex-col gap-5 md:gap-10 md:items-center">
          <h3 className="font-bold text-2xl md:text-center md:w-1/2">
            Top-tier business solutions that cater to the diverse needs of our
            clients.
          </h3>
          <div className="md:grid md:grid-cols-2 md:gap-5">
            <p>
              At Onyx Developers, we are dedicated to delivering top-tier online
              solutions that cater to the diverse needs of our clients. Founded
              on the principles of innovation and excellence, our mission is to
              empower businesses with cutting-edge strategies and technologies
              that drive online success and growth.
            </p>
            <p>
              With a team of seasoned professionals, we specialize in providing
              bespoke solutions that range from tech consulting and online
              market analysis to full-scale digital transformation. Our
              commitment to quality and customer satisfaction has earned us a
              reputation as a trusted partner in the business community.
            </p>
            <p>
              Our approach is rooted in understanding the unique challenges
              faced by each client. By leveraging our industry expertise and
              advanced tools, we tailor solutions that align with your specific
              goals and objectives. Whether you're looking to optimize your
              operations, enhance your digital presence, or explore new market
              opportunities, Onyx Developers is here to help.
            </p>
            <p>
              We pride ourselves on fostering long-term relationships with our
              clients, built on trust and transparency. Our collaborative
              process ensures that we work closely with you to achieve the best
              possible outcomes. At Onyx Developers, your success is our
              success, and we are dedicated to supporting you every step of the
              way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
