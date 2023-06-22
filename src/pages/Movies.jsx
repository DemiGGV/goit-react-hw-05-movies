import Searchbar from 'components/Searchbar';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Message, MoviesStyled } from 'styling/MainContainerCSS';
import { fetchGetImgs } from 'utils/FetchEngine';

const Movies = () => {
  const [moviesArr, setMoviesArr] = useState([]);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const querry = searchParams.get('q');
  console.log(location);

  useEffect(() => {
    if (!querry) return;
    const fetchDetails = async () => {
      try {
        const { results } = await fetchGetImgs('searchIO', querry);
        setMoviesArr(results);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, [querry]);
  console.log(moviesArr.length);
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
