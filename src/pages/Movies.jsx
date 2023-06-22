import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';
import { Message, MoviesStyled } from 'styling/MainContainerCSS';
import { fetchGetImgs } from 'utils/FetchEngine';

const Movies = () => {
  const [moviesArr, setMoviesArr] = useState([]);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const querry = searchParams.get('q');

  useEffect(() => {
    if (!querry) return;
    const fetchDetails = async () => {
      try {
        const { results } = await fetchGetImgs('searchIO', querry);
        setMoviesArr(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, [querry]);

  return (
    <div>
      <Searchbar />
      {!!moviesArr.length ? (
        <MoviesStyled>
          {moviesArr.map(movie => (
            <li key={movie.id}>
              <Link to={`./${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </MoviesStyled>
      ) : !!querry ? (
        <Message>There no movies on your query!</Message>
      ) : (
        <Message>Input your query...</Message>
      )}
    </div>
  );
};

export default Movies;
