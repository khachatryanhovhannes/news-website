import { Logo, SocialIcons, ThemeToggle } from "@/components/atoms";

export default function TopNav() {
  return (
    <div className="bg-background-secondary-light dark:bg-background-secondary-dark">
      <Logo />
      <SocialIcons />
      <ThemeToggle />
    </div>
  );
}
