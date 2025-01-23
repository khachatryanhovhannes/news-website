import { PageHeading } from "@/components/atoms";
import Resource from "@/components/atoms/resource";
import { getResources } from "@/services/api";

export default async function AiTools() {
  const resources = await getResources("ai-tools");
  return (
    <main className="px-4">
      <PageHeading title="AI գործիքներ" />
      <section className="grid grid-cols-4 gap-5">
        {resources.map((resource) => (
          <Resource resource={resource} key={resource.id} />
        ))}
      </section>
    </main>
  );
}
