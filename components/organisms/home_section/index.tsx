import { NewsList } from "@/components/molecules";
import { INewsItem } from "@/models";

interface IHomeSectionProps {
  title: string;
  content: INewsItem[];
}

export default function HomeSection({ ...props }: IHomeSectionProps) {
  const { title, content } = props;
  return (
    <section className="my-8">
      <h3 className="text-xl md:text-2xl">{title}</h3>
      <NewsList news={content} />
    </section>
  );
}
