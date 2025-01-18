import { INewsItem } from "@/models";
import Image from "next/image";
import Link from "next/link";

interface INewsItemProps {
  newsItem: INewsItem;
}

export default function NewsCard({ newsItem }: INewsItemProps) {
  const { title, description, image, path } = newsItem;

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md bg-background-secondary-light dark:bg-background-secondary-dark">
      <div className="relative h-48 overflow-hidden">
        <Image src={image} alt={title} objectFit="cover" fill />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
          {title}
        </h3>
        <p className="mt-2 text-sm text-text-secondary-light dark:text-text-secondary-dark line-clamp-3">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t  text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex justify-between items-center">
          <Link
            href={path}
            className="px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
