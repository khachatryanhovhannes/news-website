import { PageHeading } from "@/components/atoms";
import { HomeLatest } from "@/components/organisms";

export default function Home() {
  return (
    <main className="h-screen">
      <PageHeading title="Վերջին տեխնոլոգիական նորությունները" />
      <HomeLatest />
    </main>
  );
}
