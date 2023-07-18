"use client";

import React from "react";
import { EventPageProps } from "./types";
import { getEventById } from "@/mocks/dummy-data";
import EventSummary from "@/components/EventSummary";

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
    </>
  );
};

export default EventDetailPage;
