import React, { useState } from "react";
import * as S from "./TextField.style";

function TextField({
  labelText,
  value,
  placeholder,
  handleChange,
  type,
  minLength,
  maxLength,
}) {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <S.Label className="textInput" htmlFor={value} displayLabel={display}>
        {labelText}
      </S.Label>
      <S.Input
        className="textInput"
        minLength={minLength}
        maxLength={maxLength}
        required
        type={type}
        id={value}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={() => setDisplay(true)}
        onBlur={() => setDisplay(false)}
      />
    </>
  );
}

export default TextField;
