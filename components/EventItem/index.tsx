import React from "react";
import Image from "next/image";
import { EventItemProps } from "./types";
import Link from "next/link";
import { EventCard, EventLinkContainer } from "./styles";

const EventItem: React.FunctionComponent<EventItemProps> = ({ event }) => {
  const { id, title, location, date, image, isFeatured } = event;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <EventCard>
      <Image src={"/" + image} alt={title} width={"150"} height={"100"} />
      <h2>{title}</h2>
      <h3>{readableDate}</h3>
      <h4>{location}</h4>
      <EventLinkContainer>
        <Link href={`/events/${id}`}>Explore Event</Link>
      </EventLinkContainer>
    </EventCard>
  );
};

export default EventItem;
