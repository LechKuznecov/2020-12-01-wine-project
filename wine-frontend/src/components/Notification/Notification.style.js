import styled from "styled-components";

export const Box = styled.div`
  padding: 1em 0;
`;

export const NotificationBox = styled.div`
  font-size: 1em;
  padding: 1em 0;
  padding-left: 1em;
  border-radius: 6px;
  color: white;
  font-weight: bolder;
  background-color: ${(props) => (props.color === "error" ? "red" : "green")};
`;

export const NotificationButton = styled.button`
  float: right;
  border-radius: 50%;
  border: none;
  background-color: black;
  color: white;
  margin-right: 8px;
  margin-top: -8px;
  cursor: pointer;
`;
