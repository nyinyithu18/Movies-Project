import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const PeopleCard = ({ people }) => {
  return (
    <div>
      <Link to={`/people/details/${people.id}`}>
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={`https://image.tmdb.org/t/p/w500/${people.profile_path}`}
        >
          <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
            {people.original_name}
          </h5>
        </Card>
      </Link>
    </div>
  );
};

export default PeopleCard;
