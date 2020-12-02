import React, { useEffect, useContext, useState } from "react";
import * as S from "./Wines.style";
import { Box, Section } from "../../components";
import { AuthContext } from "../../context/AuthContext";

function Wines() {
  const [data, setData] = useState();
  const auth = useContext(AuthContext);
  const tharr = ["Name", "Region", "Type", "Year"];

  useEffect(() => {
    fetch("http://localhost:8080/viewwinetypes", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
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
            {data &&
              data.map((wine) => {
                return (
                  <S.Tr key={wine.id}>
                    <td>{wine.name}</td>
                    <td>{wine.region}</td>
                    <td>{wine.type}</td>
                    <td>{wine.year}</td>
                  </S.Tr>
                );
              })}
          </S.Tbody>
        </S.Table>
      </Box>
    </Section>
  );
}

export default Wines;
