import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const TVShowsCard = ({tv}) => {
  return (
    <Link to={`/details/movie/${tv.id}`}>
      <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
      >
        <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
          {tv.original_name}
        </h5>
      </Card>
    </Link>
  );
};

export default TVShowsCard;
