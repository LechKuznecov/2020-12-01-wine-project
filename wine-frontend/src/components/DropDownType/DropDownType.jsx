import React from "react";
import * as S from "./DropDownInput.style";

function DropDownInput({ handleChange, options, labelText, value, display }) {
  return (
    <>
      <S.Label className="textInput" htmlFor={value} displayLabel={display}>
        {labelText}
      </S.Label>
      <S.Select onChange={handleChange} defaultValue>
        {options &&
          options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.name}
            </option>
          ))}
      </S.Select>
    </>
  );
}

export default DropDownInput;
