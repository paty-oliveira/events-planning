import React from "react";
import { EventPageProps } from "./types";

const DetailedEventPage: React.FunctionComponent<EventPageProps> = ({
  params,
}) => {
  return (
    <>
      <h1>Event Page</h1>
      <h2>Event: {params.eventId}</h2>
    </>
  );
};

export default DetailedEventPage;
