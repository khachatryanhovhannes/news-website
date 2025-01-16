import Link from "next/link";

const info = {
  title: "Apple Next-Generation AR Glasses",
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

export default function HomeLatestBig() {
  const { title, desc, keywords, date } = info;
  return (
    <article
      className="w-full h-full bg-opacity-50 shadow-lg rounded-lg overflow-hidden bg-cover text-black dark:text-white"
      style={{
        backgroundImage: "url('images/appleProduct.jpg')",
      }}
    >
      <div className="flex flex-col justify-between w-full h-full bg-opacity-60 bg-white dark:bg-black dark:bg-opacity-60">
        <div className="flex flex-col items-end p-5">
          <p className="rounded-lg mt-1 ">{date}</p>
        </div>

        <div className="p-4">
          <div className="flex gap-1">
            {keywords.map((keyword, index) => (
              <Link
                href={`/search?q=${keyword}`}
                key={index}
                className="inline-block px-2 py-1 text-xs font-semibold tracking-wider bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
              >
                {keyword}
              </Link>
            ))}
          </div>
          <h3 className="text-3xl mt-3">{title}</h3>
          <p className="mt-1">
            {desc.length > 120 ? desc.substring(0, 120) + "..." : desc}{" "}
            <Link href="/">Read More</Link>
          </p>
        </div>
      </div>
    </article>
  );
}
