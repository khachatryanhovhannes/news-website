import { HomeLatestBig, HomeLatestSmall } from "@/components/molecules";

export default function HomeLatest() {
  return (
    <section className="grid-cols-2 w-full grid gap-7">
      <HomeLatestBig />
      <section className="grid-cols-2 grid gap-7">
        <HomeLatestSmall />
        <HomeLatestSmall />
        <HomeLatestSmall />
        <HomeLatestSmall />
      </section>
    </section>
  );
}
