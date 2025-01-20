import { PageHeading } from "@/components/atoms";
import { HomeLatest, HomeSection } from "@/components/organisms";
import { NEWS } from "../dump/news";

export default function Home() {
  return (
    <main className="px-4">
      <PageHeading title="Վերջին տեխնոլոգիական նորությունները" />
      <HomeLatest />
      <HomeSection title="Հայկական Նորություններ" content={NEWS} />
      <HomeSection title="Արտասահմանյան Նորություններ" content={NEWS} />
    </main>
  );
}
