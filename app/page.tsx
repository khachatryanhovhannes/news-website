import { ThemeToggle } from "@/components/atoms";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-background-primary-light dark:bg-background-primary-dark">
        <ThemeToggle />
        <h1 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark">
          Welcome to Tailwind CSS with Light & Dark Mode!
        </h1>
        <p className="text-text-secondary-light dark:text-text-secondary-dark mt-4">
          This is an example of light and dark mode with Next.js and Tailwind
          CSS.
        </p>
      </div>
    </main>
  );
}
