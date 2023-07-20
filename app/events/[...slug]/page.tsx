"use client";

import React from "react";
import { FilteredEventPageProps } from "./types";
import { usePathname } from "next/navigation";
import { getFilteredEvents } from "@/mocks/dummy-data";
import EventList from "@/components/EventList";
import ResultsTitle from "@/components/ResultsTitle";
import Link from "next/link";

const getMonthAndYearFromUrl = (pathName: string) => {
  const path = pathName.split("/").reverse();
  const month = +path[0];
  const year = +path[1];
  return { year, month };
};

const FilteredEventPage: React.FunctionComponent<FilteredEventPageProps> = ({
  params,
}) => {
  const pathName = usePathname();

  const dateFilter = getMonthAndYearFromUrl(pathName);
  const filteredEvents = getFilteredEvents(dateFilter);

  const date = new Date(dateFilter.year, dateFilter.month - 1).toString();

  if (filteredEvents.length === 0) {
    return (
      <>
        <p>No events found for the chosen filter!</p>
        <Link href={"/events"}>Show All Events</Link>
      </>
    );
  }

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventPage;
