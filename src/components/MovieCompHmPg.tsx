import React from "react";
import { IMovie } from "../models/types";
import { Link } from "react-router-dom";
import { Center, Image, Text, WrapItem } from "@chakra-ui/react";

const MovieCompHmPg = ({ movie }: { movie: IMovie }) => {
    return (
        <WrapItem width="10%" height="100%">
            <Link to={`/movie/${movie._id}`}>
                <Image
                    src={movie.poster.previewUrl}
                    alt={movie.title}
                    objectFit="fill"
                    width="250px"
                    height="375px"
                />
                <Text noOfLines={[1, 2, 3]}>{movie.title}</Text>
            </Link>
        </WrapItem>
    );
};

export default MovieCompHmPg;
