import Image from "next/image";

interface IEventProps {
  id: number;
  date: string;
  title: string;
  location: string;
  image: string;
  description: string;
  link: string;
}

export default function Event({ ...props }: IEventProps) {
  const { date, title, location, image, description, link } = props;

  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-md transition-shadow ">
      <div className="relative w-full aspect-[3/2]">
        <Image
          src={image}
          alt={title}
          fill
          objectFit="cover"
          className="w-full h-40 object-cover rounded-t-lg"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {new Date(date).toLocaleDateString("hy-AM", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Վայր՝ {location}
        </p>
        <p className="mt-2 text-sm">{description}</p>
        <a
          href={link}
          className="mt-4 inline-block text-primary hover:underline"
        >
          Մանրամասն
        </a>
      </div>
    </div>
  );
}
