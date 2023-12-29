import React, { useEffect, useState } from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { api, api_key } from "../api/api";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/Action/Movies";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchMovies, setSearchMovies] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getInput = async () => {
    if (searchMovies != "") {
      const res = await api.get(
        `/search/movie?query=${searchMovies}&api_key=${api_key}`
      );
      dispatch(fetchMovies(res.data.results));
      setSearchMovies("");
    } else {
      const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
      dispatch(fetchMovies(res.data.results));
    }
  };

  useEffect(() => {
    getInput();
  }, []);

  return (
    <header className="shadow-md z-50 w-full">
      <Navbar fluid rounded className="">
        <Navbar.Brand href="">
          <img
            onClick={() => navigate("/")}
            src="https://static.vecteezy.com/system/resources/thumbnails/012/657/549/small/illustration-negative-film-reel-roll-tapes-for-movie-cinema-video-logo-vector.jpg"
            className="mr-3 h-12 w-16"
            //alt="Dream Channel Logo"
          />
          <span
            onClick={() => navigate("/")}
            className="self-center hidden md:block whitespace-nowrap text-2xl font-semibold dark:text-white"
          >
            Dream Movies Channel
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <TextInput
            value={searchMovies} placeholder="Search Movies....."
            onChange={(e) => setSearchMovies(e.target.value)}
          />
          <Button onClick={() => getInput()} color="blue" className="ms-2">
            Search
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="text-lg">
            <Link to="/">Popular Movies</Link>
          </Navbar.Link>
          <Navbar.Link className="text-lg">
            <Link to="/trmovies">Top Rated Movies</Link>
          </Navbar.Link>
          <Navbar.Link className="text-lg">
            <Link to="/people">Popular People</Link>
          </Navbar.Link>
          <Navbar.Link className="text-lg">
            <Link to="tvshows">TV Shows</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
