import { Navbar, TopNav } from "@/components/molecules";

export default function Header() {
  return (
    <header className="w-full">
      <div className="w-full flex flex-row justify-between lg:flex-col ">
        <TopNav />
        <Navbar />
      </div>
    </header>
  );
}
