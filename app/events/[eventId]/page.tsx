import React from "react";

type Event = {
  eventId: string;
};

type EventPageProps = {
  params: Event;
}

const DetailedEventPage: React.FunctionComponent<EventPageProps> = ({ params }) => {
  return <>
    <h1>Event Page</h1>
    <h2>Event: {params.eventId}</h2>
  </>;
};

export default DetailedEventPage;
