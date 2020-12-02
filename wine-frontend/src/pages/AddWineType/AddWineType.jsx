import React, { useState } from "react";
import {
  Section,
  Heading,
  Box,
  InputField,
  DropDownInput,
  Button,
  Notification,
} from "../../components";
import { useHistory } from "react-router-dom";
import * as S from "./AddWineType.style";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function addWine(name, region, type, year, history, setNotification, auth) {
  fetch(`http://localhost:8080/addWineType`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
    body: JSON.stringify({
      name: name,
      region: region,
      type: type,
      year: year,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if ((data.msg = "Your session is no longer valid")) {
        return setNotification(data.msg || "Error");
      } else {
        history.push("/");
      }
    })
    .catch((err) => setNotification(err.message));
}

function AddWineType() {
  const auth = useContext(AuthContext);
  const [notification, setNotification] = useState();
  const history = useHistory();
  const types = [
    {
      id: 1,
      name: "Red",
      value: "red",
    },
    {
      id: 2,
      name: "White",
      value: "white",
    },
    {
      id: 3,
      name: "Rose",
      value: "rose",
    },
  ];
  const [name, setName] = useState();
  const [region, setRegion] = useState();
  const [type, setType] = useState();
  const [year, setYear] = useState();
  console.log(auth.token);
  return (
    <Section>
      <Heading>Add Wine Type</Heading>
      {notification && (
        <Notification color="error" handleChange={() => setNotification(false)}>
          {notification}
        </Notification>
      )}
      <Box>
        <S.Heading>Add a wine type</S.Heading>
        <S.P>Short explanation how to do this</S.P>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            addWine(name, region, type, year, history, auth);
          }}
        >
          <InputField
            labelText="Wine Name"
            placeholder="Frontera"
            handleChange={(e) => setName(e.target.value)}
          />
          <InputField
            labelText="Region"
            placeholder="Italy"
            handleChange={(e) => setRegion(e.target.value)}
          />
          <S.Flex>
            <S.Width>
              <DropDownInput
                labelText="Type"
                options={types}
                handleChange={(e) => setType(e.target.value)}
              />
            </S.Width>
            <S.Width>
              <InputField
                labelText="Year"
                placeholder="2001"
                handleChange={(e) => setYear(e.target.value)}
              />
            </S.Width>
          </S.Flex>
          <S.ButtonBlock>
            <Button type="submit">ADD</Button>
          </S.ButtonBlock>
        </form>
      </Box>
    </Section>
  );
}

export default AddWineType;
