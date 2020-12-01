import React from "react";
import * as S from "./Header.style";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <S.Header>
      <Link to="/">
        <S.Logo src={logo} alt="logo" />
      </Link>

      <S.Actions>
        <S.StyledLink to="/">Home</S.StyledLink>
        <S.StyledLink to="/about">About</S.StyledLink>
      </S.Actions>
    </S.Header>
  );
}

export default Header;
