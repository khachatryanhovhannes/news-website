import { PageHeading } from "@/components/atoms";
import { HomeLatest, HomeSection } from "@/components/organisms";

export default function Home() {
  return (
    <main className="">
      <PageHeading title="Վերջին տեխնոլոգիական նորությունները" />
      <HomeLatest />
      <HomeSection title="Հայկական Նորություններ" />
    </main>
  );
}
