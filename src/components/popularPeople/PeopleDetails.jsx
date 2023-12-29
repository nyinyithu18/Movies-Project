import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { api, api_key } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeopleCast, selectedPeople } from "../../redux/Action/Peoples";
import { Button, Carousel } from "flowbite-react";
import PersonCast from "./PersonCast";

const PeopleDetails = () => {
  const { personId } = useParams();
  const dispatch = useDispatch();
  const person = useSelector((state) => state.people.people);
  const personCast = useSelector((state) => state.peopleCast.peopleCast);
  const navigate = useNavigate();

  const getPerson = async () => {
    const res = await api.get(`person/${personId}?api_key=${api_key}`);
    dispatch(selectedPeople(res.data));
  };

  const getCast = async () => {
    const res = await api.get(
      `person/${personId}/movie_credits?api_key=${api_key}`
    );
    dispatch(fetchPeopleCast(res.data.cast));
  };

  useEffect(() => {
    getPerson();
    getCast();
  }, []);

  if (personCast && person.also_known_as) {
    return (
      <div>
        <div className="mt-2">

          <div className="flex flex-col md:flex-row">
            <div className="md:w-5/12">
              <div className="flex m-3 justify-center">
                <img
                  className="w-11/12 sm:w-9/12 md:w-96 lg:w-10/12"
                  src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                  alt=""
                />
              </div>
              <div className="p-3 mx-3 border shadow-xl">
                <h1 className="text-3xl mt-1 font-bold">Personal Info</h1>
                <div className="mt-3">
                  <span className="font-medium text-lg">Known For - </span>
                  <span>{person.known_for_department}</span>
                </div>
                <div className="mt-5">
                  <span className="font-medium text-lg">Known Credits - </span>
                  <span></span>
                </div>
                <div className="mt-5">
                  <span className="font-medium text-lg">Gender - </span>
                  {person.gender == 1 ? <span>Male</span> : <span>Female</span>}
                </div>
                <div className="mt-5">
                  <span className="font-medium text-lg">Birthday - </span>
                  <span>{person.birthday}</span>
                </div>
                <div className="mt-5">
                  <span className="font-medium text-lg">Place of Birth - </span>
                  <span>{person.place_of_birth}</span>
                </div>
                <div className="mt-5">
                  <span className="font-medium text-lg">Also Known As - </span>
                  {person.also_known_as != [] ? (
                    person.also_known_as.map((knownAs, index) => (
                      <p key={index}>- {knownAs}</p>
                    ))
                  ) : (
                    <span></span>
                  )}
                </div>
              </div>
            </div>

            <div className="m-3 md:w-7/12">
              <div className="border shadow-xl p-3 pb-4">
                <h1 className="font-bold text-3xl mt-1">{person.name}</h1>
                <div className="mt-5">
                  <h2 className="text-lg font-medium">Biography</h2>
                  <p className="mt-2">{person.biography}</p>
                </div>
              </div>

              <div className="border shadow-xl mt-5 p-3">
                <h2 className="text-2xl font-medium mt-1">Known For</h2>
                <div className="flex justify-center mt-3">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {personCast.length > 0 ? (
                      personCast.map((person) => (
                        <PersonCast key={person.id} person={person} />
                      ))
                    ) : (
                      <h1>There is no cast!</h1>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PeopleDetails;
