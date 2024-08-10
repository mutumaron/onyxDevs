"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Website Design",
    href: "/website",
    description:
      "At Onyx Devs, web design means crafting visually stunning and intuitive interfaces, ensuring a seamless user experience across all devices with responsive design",
  },
  {
    title: "Mobile Design",
    href: "/mobile",
    description:
      "Onyx Devs specializes in mobile development, creating efficient and engaging apps for both iOS and Android, enhancing user experience on all mobile platforms.",
  },
  {
    title: "Database Design",
    href: "/database",
    description:
      "Our database management at Onyx Devs ensures efficient data storage, retrieval, and organization, supporting scalable and secure applications with optimized data handling.",
  },
  {
    title: "Technical Writing",
    href: "/writing",
    description:
      "Onyx Devs provides expert technical writing, producing clear and concise documentation that makes complex technical information accessible and understandable for all audiences. ",
  },
  {
    title: "Products",
    href: "/",
    description: "Comming Soon",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image
                      src={"/images/logo-black.svg"}
                      alt="logo"
                      height={150}
                      width={150}
                      className="items-center"
                    />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      onyx/developers
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed Websites built with ReactJs/Nextjs
                      and Tailwind CSS.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/about" title="About Onyx Dev">
                Know all About Onyx Developers.We offer mordern and fast
                Website/Mobile Applications.
              </ListItem>
              <ListItem href="/blog" title="Blogs">
                Increase Your Technological Understanding with Onyx.Dev Blogs
              </ListItem>
              <ListItem href="/contact" title="Contact us">
                Get in touch with Onyx Developers
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
const ListItem = React.forwardRef<
  HTMLDivElement,
  Omit<React.ComponentPropsWithoutRef<"div">, "ref"> & {
    href: string;
    title: string;
  }
>(({ className, title, children, href = "/", ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} passHref>
          <div
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default ListItem;
