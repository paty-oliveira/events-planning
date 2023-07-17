"use client";

import React from "react";
import EventList from "@/components/EventList";
import { getFeaturedEvents } from "@/mocks/dummy-data";
import { StyledContainer } from "./styles";


const Home: React.FunctionComponent = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <StyledContainer>
      <EventList items={featuredEvents} />
    </StyledContainer>
  );
};

export default Home;
