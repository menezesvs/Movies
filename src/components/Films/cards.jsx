import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "../../styles/cards";
import star from "../../assets/img/star.svg";
import IMDB from "../../assets/img/imdb.png";
import film from "../../assets/img/film.png";
import play from "../../assets/img/player.png";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function CardsFilms () {
  
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    const fetchFilme = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=pt-Br`
        );
        const randomIndex = Math.floor(
          Math.random() * response.data.results.length
        );
        const randomFilme = response.data.results[randomIndex];
        setFilme(randomFilme);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFilme();
  }, []);

  if (!filme) {
    return <div>Loading...</div>;
  }

  const backgroundImage = `https://image.tmdb.org/t/p/original${filme.backdrop_path}`;

  return (
    <>
      <S.Card
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <S.Movies>
        <S.Title>{filme.title}</S.Title>
        <S.Classification>
          <img src={star} alt="estrela" />
          <div>
            <p>{filme.vote_average}</p>
            <span>/10</span>
          </div>
          <img src={IMDB} alt="" width={40} height={20} />
        </S.Classification>
        <S.Description>{filme.overview}</S.Description>
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