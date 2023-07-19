"use client";

import React from "react";
import { FormContainer, Controls, Control, Button } from "./styles";

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
  const handleOnClick = () => {};

  return (
    <FormContainer>
      <Controls>
        <Control>
          <label htmlFor="year">Year</label>
          <select id="year">
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </Control>
        <Control>
          <label htmlFor="month">Month</label>
          <select id="month">
            {months.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
        </Control>
      </Controls>
      <Button onClick={handleOnClick}>Search</Button>
    </FormContainer>
  );
};

export default EventsSearch;
