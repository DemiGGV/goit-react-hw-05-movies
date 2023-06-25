import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewBC, ReviewList, ReviewText } from 'styling/MainContainerCSS';
import { fetchGetImgs } from 'utils/FetchEngine';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const movieID = id;
  const first = useRef(true);

  useEffect(() => {
    if (!first.current) return;
    const fetchDetails = async () => {
      try {
        const response = await fetchGetImgs('reviewsIO', '', movieID);
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
    first.current = false;
  }, [first, movieID]);

  return (
    <ReviewList>
      {!!reviews.length ? (
        reviews.map(review => {
          return (
            <li key={review.author}>
              <h4>{review.author}</h4>
              <ReviewBC>
                <p>{review.content}</p>
              </ReviewBC>
            </li>
          );
        })
      ) : (
        <p>We have no reviews until now.</p>
      )}
    </ReviewList>
  );
};

export default Reviews;
