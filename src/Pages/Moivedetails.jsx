import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Movie/Loading';
import Error from '../Movie/Error';
import { fetchMovieDetails } from '../Api/tmdb';

export default function Moviedetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id)
      .then(setMovie)
      .catch(() => setError('Failed to fetch movie details.'))
      .finally(() => setLoading(false));
  }, [id]);
  console.log(movie)



  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="movie-details">
      <div className="movie-image">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      

        <p><strong>Release Date: </strong> {movie.release_date}</p>
        <p><strong>RunTime: </strong>{movie.runtime}</p>
        <p><strong>TagLine: </strong>{movie.tagline}</p>
        <p><strong>Budget: </strong>{movie.budget}</p>
        <p><strong>Genres: </strong> 
           {movie.genres.map((genre, index) => (
       <span key={genre.id}>
       {genre.name}{index < movie.genres.length - 1 ? ', ' : ''}
        </span>
         ))}
        </p>
        <p><strong>Popularity: </strong>{movie.popularity}</p>
        <p><strong>Rating: </strong> {movie.vote_average}</p>
      </div>
    </div>
  );
}
