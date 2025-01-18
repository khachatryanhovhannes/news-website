interface IHomeSectionProps {
  title: string;
}

export default function HomeSection({ ...props }: IHomeSectionProps) {
  const { title } = props;
  return (
    <section>
      <h3>{title}</h3>
    </section>
  );
}
