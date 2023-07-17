import React from "react";
import Image from "next/image";
import { EventItemProps } from "./types";
import Link from "next/link";
import { EventCard, EventLinkContainer } from "./styles";
import { CiLocationOn } from "react-icons/ci";
import { BsCalendarDate } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

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
      <h3>
        <BsCalendarDate className="icon" />
        {readableDate}
      </h3>
      <h4>
        <CiLocationOn className="icon"/>
        {location}
      </h4>
      <EventLinkContainer>
        <Link href={`/events/${id}`}><BsSearch className="icon"/>Explore Event</Link>
      </EventLinkContainer>
    </EventCard>
  );
};

export default EventItem;
