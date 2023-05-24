import styled from "styled-components";

export const MenuMain = styled.nav`
  height: 10vh;
  width: 90.5vw;
  padding: 0 5%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00000050;
  opacity: 1;
  backdrop-filter: blur(10px);
  box-shadow: 0px 3px 6px #0000005c;
  text-align: justify;
  z-index: 100;
  list-style: none;
  @media (max-width: 950px){
      height: 15vh;
    }
`;

export const Logotipo = styled.div`
  height: 6vh;
  cursor: pointer;
  img {
    height: 100%;
  }
`;

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    @media (max-width: 950px){
      flex-direction: column;
    }
    @media (max-width: 950px){
      gap: 1rem;
    }
`

export const Path = styled.li`
    padding: 5.5px;
    list-style: none;
    border-radius: 50px;
    background-color: transparent;
    font-size: 0.90rem;
    color: #fff;
    transition: ease-in-out 0.3s;
    /* box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); */
`

export const Selections = styled.div`
    display: flex;
    gap: 35px;
    color: #fff;
    p{
        cursor: pointer;
        transition: ease-in-out 0.3s;
        &:hover{
            opacity: 0.7;
        }
    }
    @media (max-width: 950px){
      display: none;
    }
`