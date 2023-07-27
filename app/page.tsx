"use client";

import React from "react";
import EventList from "@/components/EventList";
import { getFeaturedEvents } from "@/mocks/utils";
import StyledContainer from "@/components/StyledContainer";
import NavBar from "@/components/NavBar";

const Home: React.FunctionComponent = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <StyledContainer>
      <NavBar />
      <EventList items={featuredEvents} />
    </StyledContainer>
  );
};

export default Home;
