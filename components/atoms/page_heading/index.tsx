interface IPageHeadingProps {
	title: string;
}
export default function PageHeading({ ...props }: IPageHeadingProps) {
	const { title } = props;

	return <h1 className="text-center text-2xl py-7">{title}</h1>;
}
