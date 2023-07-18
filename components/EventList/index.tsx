"use client";
import React from "react";
import { EventListProps } from "./types";
import EventItem from "../EventItem";
import { ListContainer } from "./styles";

const EventList: React.FunctionComponent<EventListProps> = ({ items }) => {
  return (
    <ListContainer>
      {items.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ListContainer>
  );
};

export default EventList;
