import React from "react";
import Image from "next/image";
import { EventItemProps } from "./styles";
import Link from "next/link";

const EventItem: React.FunctionComponent<EventItemProps> = ({ event }) => {
  const { id, title, location, date, image, isFeatured } = event;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedLocation = location.replace(",", "\n");

  return (
    <li>
      <Image src={"/" + image} alt={title} width={"100"} height={"50"} />
      <h2>{title}</h2>
      <h3>{readableDate}</h3>
      <h4>{formattedLocation}</h4>
      <div>
        <Link href={`/events/${id}`}>Explore Event</Link>
      </div>
    </li>
  );
};

export default EventItem;
