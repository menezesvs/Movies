import { useEffect, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import axios from "axios";
import * as S from "../../styles/carousel";

export default function CarouselFilms () {

  const API_KEY = import.meta.env.VITE_API_KEY;

  const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: false},
    {width: 400, itemsToShow: 2, showArrows: false},
    {width: 500, itemsToShow: 3, showArrows: false},
    {width: 700, itemsToShow: 5},
  ];

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    getFilmes();
  }, []);

  const getFilmes = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=pt-Br&page=1`
      )
      .then((resposta) => {
        const allApi = resposta.data.results.map((item) => {
          return {
            ...item,
            image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          };
        });
        setFilmes(allApi);
      })
      .catch((error) =>
        alert(`desculpe, essa página não existe ${error}`)
      );
  };


  return (
    <S.Cards>
    <h2>Últimos lançamentos</h2>
      <Carousel
        breakPoints={breakPoints}
        itemsToScroll={3}
        pagination={false}
        enableAutoPlay
        autoPlaySpeed={2500}
        itemPadding={[20, 10]}
        itemPosition={consts.END}
      >
        {filmes.map((filme) => (
          <figure>
            <img src={filme.image} style={{ width: "100%", height: "auto"}} />
            <h3>{filme.title}</h3>
            <span>{filme.release_date.substring(0, 4)}</span>
            <p>{filme.overview}</p>
          </figure>
        ))}
      </Carousel>
    </S.Cards>
  );
}