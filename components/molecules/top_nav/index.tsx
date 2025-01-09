import { Logo, SocialIcons, ThemeToggle } from "@/components/atoms";

export default function TopNav() {
  return (
    <div className="bg-background-secondary-light dark:bg-background-secondary-dark flex justify-between items-center p-2">
      <Logo />
      <div className="flex items-center gap-5">
        <SocialIcons />
        <ThemeToggle />
      </div>
    </div>
  );
}
