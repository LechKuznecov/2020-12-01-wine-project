import React, { useContext } from "react";
import * as S from "./Header.style";
import { AuthContext } from "../../context/AuthContext";

function Header({ isLoggedIn }) {
  const auth = useContext(AuthContext);
  return (
    <S.Header>
      <S.Wrapper>
        <S.Logo>winefine</S.Logo>

        <S.Actions>
          {isLoggedIn && (
            <>
              <S.StyledLink to="/">Wine Type</S.StyledLink>
              <S.StyledLink to="/addWineType">Add Wine Type</S.StyledLink>
              <S.StyledLink to="/wineList">Wine List</S.StyledLink>
              <S.StyledLink to="/addWineQty">Add Wine Quantity</S.StyledLink>
              <S.StyledLink
                onClick={() => {
                  localStorage.removeItem("token");
                  auth.setToken(null);
                }}
                to="/login"
              >
                Logout
              </S.StyledLink>
            </>
          )}
          {!isLoggedIn && (
            <>
              <S.StyledLink to="/login">Login</S.StyledLink>
              <S.StyledLink to="/register">Register</S.StyledLink>
            </>
          )}
        </S.Actions>
      </S.Wrapper>
    </S.Header>
  );
}

export default Header;
