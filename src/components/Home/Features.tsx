import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookType, CodeXml, DatabaseZap, TabletSmartphone } from "lucide-react";

const Features = () => {
  return (
    <section className="flex flex-col gap-10 lg:py-20">
      <h1 className="font-bold text-2xl">WHAT WE OFFER</h1>
      <div className="grid gap-5 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>
              <CodeXml />
            </CardTitle>
            <CardDescription>Web Development</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              At Onyx Devs, we specialize in cutting-edge web development,
              delivering tailored digital solutions that drive business success.
              Our expert team blends innovative design with robust functionality
              to create responsive, user-friendly websites and applications,
              ensuring a seamless online experience that meets the unique needs
              of each client.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <TabletSmartphone />
            </CardTitle>
            <CardDescription>Mobile Development</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              We excel in mobile development, crafting intuitive and
              high-performance apps for iOS and Android platforms. Our team of
              skilled developers combines creativity with technical expertise to
              build mobile solutions that enhance user engagement, streamline
              processes, and provide a seamless experience across devices,
              helping businesses thrive in the mobile-first world.
            </p>
          </CardContent>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>
              <DatabaseZap />
            </CardTitle>
            <CardDescription>Database Design</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Ourr database design services focus on creating efficient,
              scalable, and secure data structures tailored to your business
              needs. We specialize in designing databases that optimize
              performance, ensure data integrity, and support seamless data
              retrieval. Our expert team ensures your data is well-organized,
              easily accessible, and ready to drive informed decision-making.
            </p>
          </CardContent>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>
              <BookType />
            </CardTitle>
            <CardDescription>Technical Writing</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our technical writing services provide clear, concise, and
              accurate documentation tailored to your audience. We specialize in
              creating user manuals, API documentation, and technical guides
              that bridge the gap between complex technology and user
              understanding. Our skilled writers ensure your content is
              informative, accessible, and aligned with industry standards.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Features;
