import { HomeLatestBig, HomeLatestSmall } from "@/components/molecules";

export default function HomeLatest() {
  return (
    <section className="grid-cols-2 w-full grid gap-7">
      <HomeLatestBig />
      <section className="grid-cols-2 grid gap-7">
        <HomeLatestSmall image="https://avatars.mds.yandex.net/i?id=fd236fdd1cfcc621ff050f4579b37cfbcc5dc804-9880043-images-thumbs&n=13" />
        <HomeLatestSmall image="https://images.unsplash.com/photo-1735776327649-eeb6b6ed8829?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <HomeLatestSmall image="https://images.unsplash.com/photo-1736264335247-8ec5664c8328?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <HomeLatestSmall image="https://images.unsplash.com/photo-1736673084495-be9439760067?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </section>
    </section>
  );
}
