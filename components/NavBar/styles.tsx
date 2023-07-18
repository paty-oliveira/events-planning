import styled from "styled-components";

export const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  h2 {
    color: ${(props) => props.theme.colors["red"]["300"]};
    font-weight: bolder;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    font-weight: bolder;
    color: ${(props) => props.theme.colors["red"]["300"]};
    font-size: 1.5rem;
  }

  .icon {
    margin-right: 0.2rem;
  }
`;
