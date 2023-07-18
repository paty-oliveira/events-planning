"use client"

import React, { Fragment } from "react";
import { EventPageProps } from "./types";
import { getEventById } from "@/mocks/dummy-data";
import StyledContainer from "@/components/StyledContainer";

const EventDetailPage: React.FunctionComponent<EventPageProps> = ({
  params,
}) => {
  const eventId = params.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>
  }

  return (
    <StyledContainer>
      <h1>Event Page</h1>
      <h2>Title: {event.title}</h2>
      <p>Description: {event.description}</p>
    </StyledContainer>
  );
};

export default EventDetailPage;
