import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, MoviePoster } from 'styling/MainContainerCSS';
import { fetchGetImgs } from 'utils/FetchEngine';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const movieID = id;
  const first = useRef(true);

  useEffect(() => {
    if (!first.current) return;
    const fetchDetails = async () => {
      try {
        const response = await fetchGetImgs('castIO', '', '', movieID);
        setCast(response.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
    first.current = false;
  }, [first, movieID]);

  return (
    <CastList>
      {cast.map(actor => {
        return (
          <li key={actor.name}>
            <MoviePoster
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : 'https://fakeimg.pl/200x300?text=No%20Photo'
              }
              alt={`foto of ${actor.name}`}
            />
            <p>
              <b>{actor.name}</b>
            </p>
            <p>
              <i>{actor.character}</i>
            </p>
          </li>
        );
      })}
    </CastList>
  );
};

export default Cast;
