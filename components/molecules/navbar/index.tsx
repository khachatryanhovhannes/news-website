"use client";
import { NavItem, SocialIcons, ThemeToggle } from "@/components/atoms";
import { NAVIGATION } from "@/constants";
import { useState } from "react";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import clsx from "clsx";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="lg:bg-background-secondary-light lg:dark:bg-background-secondary-dark">
      <div className="hidden lg:flex justify-between items-center">
        {NAVIGATION.map((nav_item) => (
          <NavItem
            label={nav_item.label}
            path={nav_item.path}
            key={nav_item.path}
            child={nav_item?.child}
          />
        ))}
      </div>

      <div className="lg:hidden flex justify-between items-center p-4">
        <IoMenuSharp onClick={handleNavOpen} cursor="pointer" size={24} />
      </div>

      <div
        className={clsx(
          "lg:hidden bg-background-secondary-light dark:bg-background-secondary-dark fixed top-0 left-0 w-full h-full z-40 transition-transform duration-300 ease-in-out",
          {
            "translate-x-0": isNavOpen,
            "-translate-x-full": !isNavOpen,
          }
        )}
      >
        <div className="text-right px-4 py-2 text-2xl flex justify-between items-center">
          <ThemeToggle />
          <IoClose onClick={handleNavOpen} cursor="pointer" />
        </div>

        <div className="flex flex-col items-center mt-5 h-full">
          {NAVIGATION.map((nav_item) => (
            <NavItem
              label={nav_item.label}
              path={nav_item.path}
              key={nav_item.path}
              child={nav_item?.child}
              onClick={() => setIsNavOpen(false)}
            />
          ))}

          <div className="flex items-center gap-4 mt-5">
            <SocialIcons />
          </div>
        </div>
      </div>
    </nav>
  );
}
