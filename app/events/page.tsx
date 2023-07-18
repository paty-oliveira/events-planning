import React from "react";
import { getAllEvents } from "@/mocks/dummy-data";
import EventList from "@/components/EventList";

const EventsPage: React.FunctionComponent = () => {
  const events = getAllEvents();

  return (
    <>
      <EventList items={events} />
    </>
  );
};

export default EventsPage;
