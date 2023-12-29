import React from "react";
import Home from "./components/Home";
import Details from "./components/Details";
import { Route, Routes } from "react-router";
import PageNotFound from "./components/PageNotFound";
import PopularPeople from "./components/popularPeople/PopularPeople";
import Header from "./components/Header";
import PeopleDetails from "./components/popularPeople/PeopleDetails";
import TRMovies from "./components/top-rated-movies/TRMovies";
import TVShows from "./components/tvshows/TVShows";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/people" element={<PopularPeople />} />
        <Route path="/people/details/:personId" element={<PeopleDetails />} />
        <Route path="/trmovies" element={<TRMovies />} />
        <Route path="/tvshows" element={<TVShows/>} />
        <Route path="/details/movie/:id" element={<Details />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
