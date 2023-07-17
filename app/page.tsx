import React from "react";
import EventList from "@/components/EventList";
import { getFeaturedEvents } from "@/mocks/dummy-data";

const Home: React.FunctionComponent = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Next Events</h1>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default Home;
