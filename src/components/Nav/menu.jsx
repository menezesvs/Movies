// import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "../../styles/menu";
import logo from "../../assets/img/logo.png";


export default function Menu () {
  return (
    <S.MenuMain>
      <S.Logotipo><img src={logo} alt="Logo da Dell Filmes" /></S.Logotipo>
      <S.Menu>
        <S.Path>
          <NavLink
            to="/series"
            style={({ isActive }) => ({
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "50px",
                fontSize: "0.90rem",
                background: isActive ? "#747474" : "transparent",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"
            })}
          >
            Series
          </NavLink>
        </S.Path>
        <S.Path>
          <NavLink
            to="/"
            style={({ isActive }) => ({
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "50px",
                fontSize: "0.90rem",
                background: isActive ? "#747474" : "transparent",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"
              })}
          >
            Filmes
          </NavLink>
        </S.Path>
      </S.Menu>
      <S.Selections>
        <p>Filtro</p>
        <p>Login</p>
      </S.Selections>
    </S.MenuMain>
    );
  }
