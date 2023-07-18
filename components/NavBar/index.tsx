import React from "react";
import { NavBarContainer } from "./styles";
import Link from "next/link";
import { FcPlanner } from "react-icons/fc";

const NavBar: React.FunctionComponent = () => {
  return (
    <NavBarContainer>
      <h2>
        <FcPlanner className="icon" /> Events Planning
      </h2>
      <Link href={"/events"}>All Events</Link>
    </NavBarContainer>
  );
};

export default NavBar;
