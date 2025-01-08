import Link from "next/link";

interface INavItemProps {
  label: string;
  path: string;
  isActive: boolean;
}

export default function NavItem({ ...props }: INavItemProps) {
  const { label, path, isActive } = props;

  return (
    <Link className={`${isActive ? "text-white" : ""}`} href={path}>
      {label}
    </Link>
  );
}
