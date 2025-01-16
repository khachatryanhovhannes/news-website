"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

interface INavItemProps {
  label: string;
  path: string;
  child?: INavItemProps[];
}

export default function NavItem({ ...props }: INavItemProps) {
  const { label, path, child } = props;
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <div className="relative w-full group">
      <div className="cursor-pointer py-3">
        <Link
          className={`w-full ${isActive ? "underline underline-offset-4" : ""}`}
          href={path}
        >
          <button className="block w-full hover:text-primary ">
            <div className="flex items-center justify-center">
              {label}
              {child && child.length > 0 && (
                <FaCaretDown className="ml-2 transition-transform group-hover:rotate-180" />
              )}
            </div>
          </button>
        </Link>
      </div>

      {child && child.length > 0 && (
        <div className="pt-2 absolute top-full left-0 z-10 hidden group-hover:block rounded-lg shadow w-44">
          <ul className="py-2 text-sm bg-background-secondary-light dark:bg-background-secondary-dark">
            {child.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => setIsOpen(!isOpen)}
              >
                <Link href={item.path} className="block px-4 py-2">
                  <button
                    className="block w-full hover:text-primary"
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                  >
                    <div className="flex items-center justify-center">
                      {item.label}
                      {item.child && item.child.length > 0 && (
                        <FaCaretDown className="ml-2 transition-transform group-hover:-rotate-90" />
                      )}
                    </div>
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
