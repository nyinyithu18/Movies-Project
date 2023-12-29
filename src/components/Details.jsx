import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { api, api_key } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCrew,
  removeCrew,
  removeSelectedMovie,
  selectedMovie,
} from "../redux/Action/Movies";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movie);
  const crews = useSelector((state) => state.crews.crews);

  const getDetailMovie = async () => {
    const res = await api.get(`/movie/${id}?api_key=${api_key}`);
    dispatch(selectedMovie(res.data));
  };

  const getCredits = async () => {
    const res = await api.get(`/movie/${id}/credits?api_key=${api_key}`);
    dispatch(fetchCrew(res.data.crew));
  };

  useEffect(() => {
    if (id) {
      getDetailMovie();
      getCredits();
    }

    return () => {
      dispatch(removeSelectedMovie({}));
      dispatch(removeCrew({}));
    };
  }, []);

  return (
    <div className="mt-2">
      <div className="flex flex-col md:flex-row justify-between ms-7">
        <Link className="w-2/12" to="/">
          <Button className="px-3">Back</Button>
        </Link>
        <h1 className="w-10/12 text-center text-2xl font-bold">
          {movie.original_title}
        </h1>
        <span></span>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex m-3 md:w-5/12 justify-center">
          <img
            className="w-11/12 sm:w-9/12 md:w-96"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
        </div>
        <div className="m-3 md:w-7/12">
          <div className="border shadow-xl p-3">
            <div className="mt-1 mb-2 ">
              <h2 className="font-bold">Movie Details</h2>
            </div>
            <div className="mb-2">
              <span className="font-medium">Rated: </span>
              <span>{movie.vote_average}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Genres: </span>
              {movie.genres != [] ? (
                movie.genres?.map((genre) => (
                  <span key={genre.id}>{genre.name}, </span>
                ))
              ) : (
                <span></span>
              )}
            </div>
            <div className="mb-2">
              <span className="font-medium">Directed By: </span>
              {crews.map((crew, index) =>
                crew.job == "Director" ? (
                  <span key={index}>{crew.name} ,</span>
                ) : (
                  <span key={index}></span>
                )
              )}
            </div>
            <div className="mb-2">
              <span className="font-medium">Written By: </span>
              {crews.map((crew, index) =>
                crew.job == "Writer" ? (
                  <span key={index}>{crew.name} ,</span>
                ) : (
                  <span key={index}></span>
                )
              )}
            </div>
          </div>

          <div className="border shadow-xl mt-5 p-3">
            <div className="mt-2 flex justify-between">
              <div>
                <h2 className="font-semibold text-lg">Duration</h2>
                <p className="inline">{Math.trunc(movie.runtime / 60)}h</p>
                <span> {movie.runtime % 60}min</span>
              </div>
              <div>
                <h2 className="font-semibold text-lg">Budget</h2>
                {movie.budget != 0 ? <p>{movie.budget}</p> : <p>-</p>}
              </div>
              <div>
                <h2 className="font-semibold text-lg">Revenue</h2>
                {movie.revenue != 0 ? <p>{movie.revenue}</p> : <p>-</p>}
              </div>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold">{movie.tagline}</h2>
            </div>
            <div className="mt-4">
              <span className="font-bold text-xl">Overview </span>
              <div className="mt-2">{movie.overview}</div>
            </div>
          </div>

          <div className="border shadow-xl mt-5 p-3">
            <div className="mt-2 flex justify-between">
              <div>
                <h2 className="font-semibold text-lg">Release-Date</h2>
                <p>{movie.release_date}</p>
              </div>
              <div>
                <h2 className="font-semibold text-lg">Production-Country</h2>
                {movie.production_countries != [] ? (
                  movie.production_countries?.map((country, index) => (
                    <span key={index}>{country.name} </span>
                  ))
                ) : (
                  <span></span>
                )}
              </div>
              <div>
                <h2 className="font-semibold text-lg">Status</h2>
                <p>{movie.status}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Details;
