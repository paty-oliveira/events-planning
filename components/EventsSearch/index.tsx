"use client";

import React, { useState } from "react";
import { FormContainer, Controls, Control } from "./styles";
import Link from "next/link";
import { Button } from "../EventItem/styles";

const years = ["2021", "2022"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const EventsSearch: React.FunctionComponent = () => {
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedMonth, setSelectedMonth] = useState(months[0]);

  const monthIndex = months.indexOf(selectedMonth) + 1;
  const link = `events/${selectedYear}/${monthIndex}`;

  return (
    <>
      <FormContainer>
        <Controls>
          <Control>
            <label htmlFor="year">Year</label>
            <select
              id="year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </Control>
          <Control>
            <label htmlFor="month">Month</label>
            <select
              id="month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </Control>
        </Controls>
      </FormContainer>
      <Button>
        <Link href={link}>Search</Link>
      </Button>
    </>
  );
};

export default EventsSearch;
