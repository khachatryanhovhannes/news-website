import { Event } from "@/components/atoms";
import { IEvent } from "@/models";

interface IEventListProps {
  events: IEvent[];
}

export default function EventsList({ ...props }: IEventListProps) {
  const { events } = props;

  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <Event event={event} key={event.id} />
      ))}
    </div>
  );
}
