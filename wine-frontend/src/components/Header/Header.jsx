import React from "react";
import * as S from "./Header.style";

function Header() {
  return (
    <S.Header>
      <S.Wrapper>
        <S.Logo>winefine</S.Logo>

        <S.Actions>
          <S.StyledLink to="/">Wines</S.StyledLink>
          <S.StyledLink to="/list">Wine List</S.StyledLink>
          <S.StyledLink to="/addWine">Add Wine</S.StyledLink>
          <S.StyledLink to="/login">Login</S.StyledLink>
          <S.StyledLink to="/register">Register</S.StyledLink>
          <S.StyledLink to="/logout">Logout</S.StyledLink>
        </S.Actions>
      </S.Wrapper>
    </S.Header>
  );
}

export default Header;
