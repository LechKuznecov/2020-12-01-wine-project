import React, { useEffect, useState, useContext } from "react";
import { Section, Box } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import * as S from "./WineList.style";

function WineList() {
  const auth = useContext(AuthContext);
  const [quantity, setQuantity] = useState([]);
  const tharr = ["Name", "Region", "Type", "Quantity"];

  useEffect(() => {
    fetch(`http://localhost:8080/viewwinequantity`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setQuantity(data));
  }, [auth.token]);

  return (
    <Section>
      <Box>
        <S.Heading>All Wine Types below</S.Heading>
        <S.P>A short explanation of this</S.P>
        <S.Table>
          <S.Thead>
            <S.Tr>
              {tharr.map((item) => (
                <th key={item}>{item}</th>
              ))}
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {quantity &&
              quantity.map((wine) => {
                return (
                  <S.Tr key={wine.id}>
                    <td>{wine.name}</td>
                    <td>{wine.region}</td>
                    <td>{wine.type}</td>
                    <td>{wine.Total} bottles</td>
                  </S.Tr>
                );
              })}
          </S.Tbody>
        </S.Table>
      </Box>
    </Section>
  );
}
export default WineList;
