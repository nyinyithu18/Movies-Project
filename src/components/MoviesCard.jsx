import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const MoviesCard = ({ movies }) => {
  if (movies.poster_path != null) {
    return (
      <Link to={`/details/movie/${movies.id}`}>
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
        >
          <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
            {movies.original_title}
          </h5>
        </Card>
      </Link>
    );
  }
};

export default MoviesCard;
