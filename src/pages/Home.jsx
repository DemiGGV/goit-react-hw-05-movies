import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoviesStyled, Title } from 'styling/MainContainerCSS';
import { fetchGetImgs } from 'utils/FetchEngine';

const Home = () => {
  const location = useLocation();
  const [trendArr, setTrendArr] = useState([]);
  const first = useRef(true);

  useEffect(() => {
    if (!first.current) return;
    const fetchTrend = async () => {
      try {
        const response = await fetchGetImgs('trendingIO');
        setTrendArr(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrend();
    first.current = false;
  }, [first]);

  return (
    <div>
      <Title>Trending today</Title>
      <MoviesStyled>
        {trendArr.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </MoviesStyled>
    </div>
  );
};

export default Home;
