import { INewsItem } from "@/models";

interface INewsItemProps {
  newsItem: INewsItem;
}

export default function NewsCard({ ...props }: INewsItemProps) {
  const { title } = props.newsItem;

  return (
    <div>
      <h5>{title}</h5>
    </div>
  );
}
