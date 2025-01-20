import { PageHeading } from "@/components/atoms";
import { EventsList } from "@/components/molecules";

const mockEvents = [
  {
    id: 1,
    title: "Կենդանի համերգ",
    date: "2025-01-28",
    location: "Երևան, Հայաստան",
    image:
      "https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the actual image path
    description:
      "Հիանալի երաժշտական երեկո կենդանի կատարումներով և հայտնի արտիստներով:",
    link: "/events/1",
  },
  {
    id: 2,
    title: "Սեմինար՝ Տեխնոլոգիաների ապագան",
    date: "2025-02-10",
    location: "Գյումրի, Հայաստան",
    image:
      "https://plus.unsplash.com/premium_photo-1679547202548-31e36e0095ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the actual image path
    description: "Իմացեք տեխնոլոգիաների ոլորտի նորագույն զարգացումների մասին:",
    link: "/events/2",
  },
  {
    id: 3,
    title: "Փառատոն՝ Հայկական արվեստ",
    date: "2025-03-15",
    location: "Վանաձոր, Հայաստան",
    image:
      "https://images.unsplash.com/photo-1588006775388-4372241c3d6c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the actual image path
    description: "Արվեստի և մշակույթի տոն՝ հայկական արվեստի ցուցադրությամբ:",
    link: "/events/3",
  },
];

export default function Events() {
  return (
    <main className="px-4">
      <PageHeading title="Միջոցառումներ" />
      <EventsList events={mockEvents} />
    </main>
  );
}
