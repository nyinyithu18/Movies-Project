import React, { useEffect } from "react";
import { api, api_key } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/Action/Movies";
import MoviesCard from "./MoviesCard";

const Movies = () => {
  const dispatch = useDispatch();
  let movies = [];

  movies = useSelector((state) => state.movies.movies);

  const getMovies = async () => {
    const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
    dispatch(fetchMovies(res.data.results));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="flex justify-center mt-3 px-3 lg:px-5">
      <div className="w-10/12 ms-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <MoviesCard key={index} movies={movie} />
          ))
        ) : (
          <h1>There is no movies</h1>
        )}
      </div>
    </div>
  );
};

export default Movies;
