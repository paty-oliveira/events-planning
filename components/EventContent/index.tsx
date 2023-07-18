import React from "react";
import { EventContentProps } from "./types";
import { EventContentSection } from "./styles";

const EventContent: React.FunctionComponent<EventContentProps> = ({
  children,
}) => {
  return <EventContentSection>{children}</EventContentSection>;
};

export default EventContent;
