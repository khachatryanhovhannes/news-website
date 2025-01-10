import { NavItem } from "@/components/atoms";
import { NAVIGATION } from "@/constants";

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      {NAVIGATION.map((nav_item) => (
        <NavItem
          label={nav_item.label}
          path={nav_item.path}
          key={nav_item.path}
          child={nav_item?.children}
        />
      ))}
    </nav>
  );
}
