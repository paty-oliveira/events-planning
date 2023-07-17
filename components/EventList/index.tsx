import React from "react";
import { EventListProps } from "./types";
import EventItem from "../EventItem";

const EventList: React.FunctionComponent<EventListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventList;
