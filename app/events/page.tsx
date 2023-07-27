import React from "react";
import { getAllEvents } from "@/mocks/utils";
import EventList from "@/components/EventList";
import EventsSearch from "@/components/EventsSearch";

const EventsPage: React.FunctionComponent = () => {
  const events = getAllEvents();

  return (
    <>
      <EventsSearch />
      <EventList items={events} />
    </>
  );
};

export default EventsPage;
