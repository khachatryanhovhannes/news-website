import Link from "next/link";

interface INavItemProps {
  label: string;
  path: string;
  child?: INavItemProps[];
}

export default function NavItem({ ...props }: INavItemProps) {
  const { label, path } = props;

  const isActive = false;

  return (
    <Link className={`w-full py-3 ${isActive ? "text-white" : ""}`} href={path}>
      <div className="text-center">{label}</div>
    </Link>
  );
}
