import React from "react";
import { ResultsTitleProps } from "./types";
import Link from "next/link";

const ResultsTitle: React.FunctionComponent<ResultsTitleProps> = ({ date }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section>
      <h1>Events in {humanReadableDate}</h1>
      <Link href={"/events"}>Show All Events</Link>
    </section>
  );
};

export default ResultsTitle;
