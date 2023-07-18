"use client";

import React from "react";
import { EventPageProps } from "./types";
import { getEventById } from "@/mocks/dummy-data";
import EventSummary from "@/components/EventSummary";
import EventLogistics from "@/components/EventLogistics";

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
    </>
  );
};

export default EventDetailPage;
