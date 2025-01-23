import Image from "next/image";
import Link from "next/link";

interface IResourceProps {
  resource: {
    id: number;
    title: string;
    description: string;
    image: string;
    keywords: string[];
  };
}

export default function Resource({ ...props }: IResourceProps) {
  const { title, description, image, keywords } = props.resource;
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md bg-background-secondary-light dark:bg-background-secondary-dark">
      <div className="relative h-48 overflow-hidden">
        <Image src={image} alt={title} objectFit="cover" fill />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
          {title}
        </h3>
        <div className="flex gap-1 flex-wrap">
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
        <p className="mt-2 text-sm text-text-secondary-light dark:text-text-secondary-dark line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}
