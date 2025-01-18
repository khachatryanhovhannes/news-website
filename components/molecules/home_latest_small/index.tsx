import Link from "next/link";

const info = {
  title: "Apple Next-Generation AR Glasses. Introducing the latest in AR glasses from Apple. ",
  desc: "Introducing the latest in AR glasses from Apple. These state-of-the-art devices will transform your gaming experience. Experience firsthand what's possible with Apple's revolutionary AR technology.",
  keywords: [
    "#Apple",
    "#ARGlasses",
    "#Augmented Reality",
    "#Innovation",
    "#TechNews",
  ],
  date: "10.01.2025",
};

export default function HomeLatestSmall({ image }: { image: string }) {
  const { title, keywords } = info;

  return (
    <article
      className="w-full bg-white shadow-lg rounded-lg overflow-hidden bg-cover text-black dark:text-white"
      style={{
        backgroundImage: `url('${image}')`,
        aspectRatio: "3 / 2",
      }}
    >
      <div className="flex flex-col justify-between w-full h-full bg-opacity-15 bg-white dark:bg-black dark:bg-opacity-60">
        <div className="flex flex-col items-end p-2"></div>

        <div className="m-2 p-2 bg-white dark:bg-transparent rounded-md bg-opacity-60">
          <div className="flex gap-1">
            {keywords.slice(0, 2).map((keyword, index) => (
              <Link
                href={`/search?q=${keyword}`}
                key={index}
                className="inline-block px-2 py-1 text-xs font-semibold tracking-wider bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
              >
                {keyword}
              </Link>
            ))}
          </div>
          <h3 className="text-base mt-1">{title}...</h3>
        </div>
      </div>
    </article>
  );
}
