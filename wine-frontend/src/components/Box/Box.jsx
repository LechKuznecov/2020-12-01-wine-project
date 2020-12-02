import React from "react";
import * as S from "./Box.style";

function Box({ children }) {
  return (
    <div>
      <S.Box>{children}</S.Box>
    </div>
  );
}

export default Box;
