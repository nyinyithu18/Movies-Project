import React, { useEffect, useState } from "react";
import { api, api_key } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrMovies } from "../../redux/Action/Movies";
import TRMoviesCard from "./TRMoviesCard";
import { Pagination } from "@mui/material";

const TRMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.trmovies);
  const [page, setPage] = useState(1);

  const handleChange = (e, v) => {
    setPage(v);
  };

  const getTrMovies = async () => {
    const res = await api.get(
      `/movie/top_rated?api_key=${api_key}&page=${page}`
    );
    dispatch(fetchTrMovies(res.data));
  };

  useEffect(() => {
    getTrMovies();
  }, [page]);

  if (movies.results) {
    return (
      <div>
        <div className="flex justify-center mt-3 px-3 lg:px-5">
          <div className="w-10/12 ms-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {movies.results != [] ? (
              movies.results.map((movie, index) => (
                <TRMoviesCard key={index} movies={movie} />
              ))
            ) : (
              <h1>There is no movies</h1>
            )}
          </div>
        </div>
        <div className="flex justify-center m-3">
          <Pagination
            page={page}
            onChange={handleChange}
            count={movies.total_pages}
            size="large"
            color="primary"
          />
        </div>
      </div>
    );
  }
};

export default TRMovies;
