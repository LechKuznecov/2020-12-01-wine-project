import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  box-shadow: 0 3px 1px 0px #eee;
  border-bottom: 1px solid #eee;
  padding: 1em;
`;

export const Wrapper = styled.div`
  max-width: 691px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
`;

export const Logo = styled.h2`
  color: black;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Actions = styled.nav``;

export const StyledLink = styled(Link)`
  margin-left: 5px;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    transition: 1s;
    color: red;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
