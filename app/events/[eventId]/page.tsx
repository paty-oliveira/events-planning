"use client";

import React from "react";
import { EventPageProps } from "./types";
import { getEventById } from "@/mocks/utils";
import EventSummary from "@/components/EventSummary";
import EventLogistics from "@/components/EventLogistics";
import EventContent from "@/components/EventContent";
import Comments from "@/components/Comments";

const EventDetailPage: React.FunctionComponent<EventPageProps> = ({
  params,
}) => {
  const eventId = params.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={eventId}/>
    </>
  );
};

export default EventDetailPage;
