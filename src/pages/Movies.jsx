import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';
import { Message, MoviesStyled } from 'styling/MainContainerCSS';
import { fetchGetImgs } from 'utils/FetchEngine';

const Movies = () => {
  const [moviesArr, setMoviesArr] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('query') ?? '';
  // const year = searchParams.get('year') ?? '';
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    if (!params.query) return;
    const fetchDetails = async () => {
      try {
        const { results } = await fetchGetImgs(
          'searchIO',
          params.query,
          params.year
        );
        setMoviesArr(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, [params]);

  const updateQueryString = (parameter, value) => {
    if (value === '') {
      if (!delete params[parameter]) {
        console.log('Error delete');
      }
    } else {
      params[parameter] = value;
    }
    setSearchParams(params);
  };

  return (
    <div>
      <Searchbar
        value={params.query ?? ''}
        value1={params.year ?? '1980'}
        onChange={updateQueryString}
      />
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
      ) : !!params.query ? (
        <Message>There no movies on your query!</Message>
      ) : (
        <Message>Input your query...</Message>
      )}
    </div>
  );
};

export default Movies;
