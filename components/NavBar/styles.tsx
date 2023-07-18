import styled from "styled-components";

export const NavBarContainer = styled.nav`
  text-align: center;
  h2 {
    color: ${(props) => props.theme.colors["red"]["300"]};
    font-weight: bolder;
  }
`;
