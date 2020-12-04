import React, { useState, useEffect } from "react";
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
import * as S from "./AddWineQty.style";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function addWine(wineId, quantity, history, setNotification, auth) {
  fetch(`http://localhost:8080/changewinequantity`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
    body: JSON.stringify({
      wineId: wineId,
      quantityChange: quantity,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.msg === "Wine quantity succesfully changed!") {
        history.push("/");
      } else {
        return setNotification(data.msg || "Error");
      }
    })
    .catch((err) => setNotification(err.message));
}

function AddWineQty() {
  const auth = useContext(AuthContext);
  const [notification, setNotification] = useState();
  const history = useHistory();
  const [types, setTypes] = useState();
  const [wineId, setWineId] = useState();
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    fetch(`http://localhost:8080/viewWineTypes`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTypes(data);
      });
  }, [auth.token]);

  return (
    <Section>
      <Heading>Add Wine Quantity</Heading>
      {notification && (
        <Notification color="error" handleChange={() => setNotification(false)}>
          {notification}
        </Notification>
      )}
      <Box>
        <S.Heading>Add a winequantity</S.Heading>
        <S.P>Short explanation how to do this</S.P>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            addWine(wineId, quantity, history, setNotification, auth);
          }}
        >
          <DropDownInput
            labelText="Select wine type"
            options={types}
            handleChange={(e) => setWineId(e.target.value)}
          />
          <InputField
            labelText="Change wine quantity"
            placeholder="3"
            handleChange={(e) => setQuantity(e.target.value)}
          />
          <S.ButtonBlock>
            <Button type="submit">ADD</Button>
          </S.ButtonBlock>
        </form>
      </Box>
    </Section>
  );
}

export default AddWineQty;
