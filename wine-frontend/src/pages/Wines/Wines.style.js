import styled from "styled-components";

export const Heading = styled.h3`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const P = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Table = styled.table`
  box-shadow: 3px 3px 3px grey;
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #eee;
  color: black;
  /* background-color: grey; */
  @media only screen and (max-width: 500px) {
    font-size: small;
  }
`;

export const Thead = styled.thead`
  border: #eee;
  padding: 1em;
`;

export const Tbody = styled.tbody`
  border: 1px solid #eee;
`;

export const Tr = styled.tr`
  border: 1px solid #eee;
  & th {
    padding: 0.6em;
    color: black;
    background-color: white;
    border: 1px solid grey;
  }
  & td {
    padding: 0.5em;
    border: 1px solid black;
  }
  & td:last-child {
    text-align: center;
  }
`;
