import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const PersonCast = ({ person }) => {
  if (person.poster_path != null) {
    return (
      <Link to={`/details/movie/${person.id}`}>
        <Card
          className="w-52 lg:w-auto"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={`https://image.tmdb.org/t/p/w500/${person.poster_path}`}
        >
          <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
            {person.original_title}
          </h5>
        </Card>
      </Link>
    );
  }
};

export default PersonCast;
