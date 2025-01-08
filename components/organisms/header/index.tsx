import { Logo, ThemeToggle } from "@/components/atoms";
import { Navbar } from "@/components/molecules";

export default function Header() {
  return (
    <header>
      <div>
        <Logo />
        <ThemeToggle />
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  );
}
