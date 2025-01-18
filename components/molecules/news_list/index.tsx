import { NewsCard } from "@/components/atoms";
import { INewsItem } from "@/models";

interface INewsListProps {
  news: INewsItem[];
}

export default function NewsList({ ...props }: INewsListProps) {
  const { news } = props;

  return (
    <div className="mt-4 grid lg:grid-cols-4 sm:grid-cols-2 gap-4 text-center">
      {news.map((item) => (
        <NewsCard key={item.id} newsItem={item} />
      ))}
    </div>
  );
}
