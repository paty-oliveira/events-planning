"use client";

import React from "react";
import EventList from "@/components/EventList";
import { getFeaturedEvents } from "@/mocks/utils";
import StyledContainer from "@/components/StyledContainer";
import NavBar from "@/components/NavBar";
import NewsletterRegistration from "@/components/NewsletterRegistration";

const Home: React.FunctionComponent = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <StyledContainer>
      <NavBar />
      <NewsletterRegistration />
      <EventList items={featuredEvents} />
    </StyledContainer>
  );
};

export default Home;
