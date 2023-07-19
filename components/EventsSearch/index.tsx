"use client";

import React, {
  DetailedHTMLProps,
  FormEvent,
  SelectHTMLAttributes,
  useRef,
} from "react";
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
  const yearInputRef = useRef("");
  const monthInputRef = useRef("");

  const selectedYear = yearInputRef.current.value;
  const selectedMonth = monthInputRef.current.value;

  return (
    <>
      <FormContainer>
        <Controls>
          <Control>
            <label htmlFor="year">Year</label>
            <select id="year" ref={yearInputRef}>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </Control>
          <Control>
            <label htmlFor="month">Month</label>
            <select id="month" ref={monthInputRef}>
              {months.map((month, index) => (
                <option key={index} value={index}>
                  {month}
                </option>
              ))}
            </select>
          </Control>
        </Controls>
      </FormContainer>
      <Button>
        <Link href={`events/${selectedYear}/${selectedMonth}`}>Search</Link>
      </Button>
    </>
  );
};

export default EventsSearch;
