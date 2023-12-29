import React, { useEffect } from "react";
import PeopleCard from "./PeopleCard";
import { api, api_key } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople } from "../../redux/Action/Peoples";

const PopularPeople = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people.peoples);

  const getPeople = async () => {
    const res = await api.get(`/person/popular?api_key=${api_key}`);

    dispatch(fetchPeople(res.data.results));
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div className="flex justify-center mt-3 px-3 lg:px-5">
      <div className="sm:w-9/12 md:w-10/12 ms-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {people.length > 0 ? (
          people.map((person, index) => (
            <PeopleCard key={index} people={person} />
          ))
        ) : (
          <h1>No items were found that match your query.</h1>
        )}
      </div>
    </div>
  );
};

export default PopularPeople;
