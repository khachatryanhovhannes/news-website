import { Logo, SocialIcons, ThemeToggle } from "@/components/atoms";

export default function TopNav() {
  return (
    <div className="lg:bg-background-primary-light lg:dark:bg-background-primary-dark flex justify-between items-center p-4 ">
      <Logo />
      <div className="lg:flex items-center gap-4 md:gap-6 hidden">
        <SocialIcons />
        <ThemeToggle />
      </div>
    </div>
  );
}
