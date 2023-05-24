import { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from "../../styles/cards";
import star from "../../assets/img/star.svg";
import IMDB from "../../assets/img/imdb.png";
import film from "../../assets/img/film.png";
import play from "../../assets/img/player.png";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function CardsSeries () {

  const [serie, setSerie] = useState(null);

  useEffect(() => {
    const fetchSerie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=pt-Br`
        );
        const randomIndex = Math.floor(
          Math.random() * response.data.results.length
        );
        const randomSerie = response.data.results[randomIndex];
        setSerie(randomSerie);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSerie();
  }, []);

  if (!serie) {
    return <div>Loading...</div>;
  }

  const backgroundImage = `https://image.tmdb.org/t/p/original${serie.backdrop_path}`;

  return (
    <>
      <S.Card
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <S.Movies>
          <S.Title>{serie.name}</S.Title>
          <S.Classification>
            <img src={star} alt="estrela" />
            <div>
              <p>{serie.vote_average}</p>
              <span>/10</span>
            </div>
            <img src={IMDB} alt="" width={40} height={20} />
          </S.Classification>
          <S.Description>{serie.overview}</S.Description>
          <S.Btn>
          <S.BtnPlay>
            <a href="">
              <img src={play} alt="" width={15} height={15} />
              Assistir agora
            </a>
          </S.BtnPlay>
          <S.BtnTrailer>
            <a href="">
              <img src={film} alt="" width={15} height={15} />
              Trailer
            </a>
          </S.BtnTrailer>
        </S.Btn>
        </S.Movies>
      </S.Card>
    </>
  );
}