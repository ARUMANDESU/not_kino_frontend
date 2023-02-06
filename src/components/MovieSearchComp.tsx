import React from "react";
import { IMovie } from "../models/types";
import { Box, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MovieSearchComp = ({ movie }: { movie: IMovie }) => {
    return (
        <Box>
            <Link to={`/movie/${movie._id}`}>
                <HStack height="150px">
                    <Box width="60%" height="100%">
                        <Image
                            src={movie.poster.previewUrl}
                            objectFit="fill"
                            width="100px"
                            height="150px"
                        />
                    </Box>
                    <Box width="100%">{movie.title}</Box>
                </HStack>
            </Link>
        </Box>
    );
};

export default MovieSearchComp;
