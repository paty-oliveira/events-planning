import React from "react";
import { EventSummaryProps } from "./types";
import { EventSummaryContainer } from "./styles";

const EventSummary: React.FunctionComponent<EventSummaryProps> = ({
  title,
}) => {
  return (
    <EventSummaryContainer>
      <h1>{title}</h1>
    </EventSummaryContainer>
  );
};

export default EventSummary;
