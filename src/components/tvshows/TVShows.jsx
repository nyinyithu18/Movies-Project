import React, { useEffect, useState } from "react";
import { api, api_key } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchTvShows } from "../../redux/Action/Movies";
import TVShowsCard from "./TVShowsCard";
import { Pagination } from "@mui/material";

const TVShows = () => {
  const dispatch = useDispatch();
  const tv = useSelector((state) => state.movies.tvShows);
  const [page, setPage] = useState(1);

  const handleChange = (e, v) => {
    setPage(v);
  };

  const getTvshows = async () => {
    const res = await api.get(`tv/popular?api_key=${api_key}&page=${page}`);
    dispatch(fetchTvShows(res.data));
  };

  useEffect(() => {
    getTvshows();
  }, [page]);

  if (tv.results) {
    return (
      <div>
        <div className="flex justify-center mt-3 px-3 lg:px-5">
          <div className="w-10/12 ms-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tv.results.length > 0 ? (
              tv.results.map((tvshow, index) => (
                <TVShowsCard key={index} tv={tvshow} />
              ))
            ) : (
              <h1>There is no movies!</h1>
            )}
          </div>
        </div>
        <div className="flex justify-center m-5">
          <Pagination
            page={page}
            onChange={handleChange}
            count={tv.total_pages}
            size="large"
            color="primary"
          />
        </div>
      </div>
    );
  }
};

export default TVShows;
