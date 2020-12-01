import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 1px 2px goldenrod;
  padding: 1em;
  background-color: rgb(147, 193, 31);
`;

export const Logo = styled.img`
  max-height: 45px;
  max-width: 100%;
`;

export const Actions = styled.nav``;

export const StyledLink = styled(Link)`
  margin-left: 5px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    transition: 1s;
    color: goldenrod;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
