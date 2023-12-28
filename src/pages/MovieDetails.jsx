import { Loader } from 'components/Loader/Loader';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  ButtonBack,
  MovieDetailsSection,
  MovieDetailsStyled,
  MoviePoster,
  MoviesStyled,
  TitleName,
} from 'styling/MainContainerCSS';
import { fetchGetImgs } from 'utils/FetchEngine';

const MovieDetails = () => {
  const [movieDetailes, setMovieDetailes] = useState({});
  const { id } = useParams();
  const movieID = id;
  const first = useRef(true);
  const location = useLocation();

  useEffect(() => {
    if (!first.current) return;
    const fetchDetails = async () => {
      try {
        const response = await fetchGetImgs('detailsIO', '', '', movieID);
        setMovieDetailes(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
    first.current = false;
  }, [first, movieID]);

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieDetailes;
  return (
    <MovieDetailsSection>
      <Link to={location.state?.from ?? '/'}>
        <ButtonBack type="button">Go back</ButtonBack>
      </Link>
      <MovieDetailsStyled>
        <MoviePoster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : 'https://fakeimg.pl/300x450?text=No%20Photo'
          }
          alt={original_title}
        />
        <div>
          <TitleName>{original_title}</TitleName>
          <p>{`Release date: ${release_date}`}</p>
          <p>{`User score: ${Math.round(vote_average * 10)}%`}</p>
          <h3>Overview</h3>
          <p>
            <i>{overview}</i>
          </p>
          <h3>Genres</h3>
          {genres && <p>{genres.map(genre => genre.name).join(', ')}</p>}
        </div>
      </MovieDetailsStyled>
      <MoviesStyled>
        <li>
          <Link to="cast" state={{ from: location.state.from }}>
            Cast:
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state.from }}>
            User reviews:
          </Link>
        </li>
      </MoviesStyled>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MovieDetailsSection>
  );
};

export default MovieDetails;
