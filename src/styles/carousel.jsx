import { styled } from "styled-components";

export const Cards = styled.section`
  width: 93.5vw;
  padding: 0 2.5%;
  color: #fff;
  background-color: #000;
  h2 {
    margin-left: 4%;
    padding-top: 5vh;
  }
  h3 {
    font-size: 0.9rem;
  }
  span {
    font-size: 0.7rem;
  }
  p {
    font-size: 0.8rem;
    text-align: justify;
    position: absolute;
    top: 0;
    margin: 1rem;
    color: transparent;
    transition: ease-in-out 0.3s;
  }
  figure {
    position: relative;
    transition: ease-in-out 0.3s;
    &:hover {
      filter: grayscale(0.9);
    }
    &:hover p {
      color: #fff;
    }
    img {
      height: 100%;
      width: 100%;
    }
  }
  .rec.rec-next {
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 2rem;
  }
`;