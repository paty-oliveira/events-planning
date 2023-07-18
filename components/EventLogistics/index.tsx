import React from "react";
import { EventLogisticsProps } from "./types";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { BsCalendarDate } from "react-icons/bs";
import { EventLogisticsSection, LogisticsList, LogisticsItem } from "./styles";

const EventLogistics: React.FunctionComponent<EventLogisticsProps> = ({
  date,
  address,
  image,
  imageAlt,
}) => {
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <EventLogisticsSection>
      <div>
        <Image src={`/${image}`} alt={imageAlt} width={150} height={150} />
      </div>
      <LogisticsList>
        <LogisticsItem>
          <time>
            <BsCalendarDate className="icon" />
            {readableDate}
          </time>
        </LogisticsItem>
        <LogisticsItem>
          <address>
            <CiLocationOn className="icon" />
            {addressText}
          </address>
        </LogisticsItem>
      </LogisticsList>
    </EventLogisticsSection>
  );
};

export default EventLogistics;
