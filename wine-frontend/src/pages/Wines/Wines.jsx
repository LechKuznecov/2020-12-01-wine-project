import React, { useEffect, useContext, useState } from "react";
import { Section } from "../../components";
import { AuthContext } from "../../context/AuthContext";

function Wines() {
  const [data, setData] = useState();
  const auth = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:8080/viewwinetypes", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {console.log(data)}
      <Section background="grey">Wines</Section>
    </>
  );
}

export default Wines;
