import React from "react";
import { IMovie } from "../models/types";
import { Link } from "react-router-dom";

const MovieCompHmPg = ({ movie }: { movie: IMovie }) => {
    return (
        <div>
            <img src={movie.poster.previewUrl} alt={movie.title} />
            <Link to={`/movie/${movie._id}`}>
                <h4>{movie.title}</h4>
            </Link>
        </div>
    );
};

export default MovieCompHmPg;
