import React, { useEffect } from "react";
import { observer } from "mobx-react";
import movieStore from "../stores/MovieStore";
import MovieCompHmPg from "../components/MovieCompHmPg";
import { Wrap } from "@chakra-ui/react";

const HomePage = () => {
    useEffect(() => {
        movieStore.getMovies(100);
    }, []);

    return (
        <div>
            <Wrap spacing="5%">
                {movieStore.movies.map((movie) => (
                    <MovieCompHmPg movie={movie} key={movie._id} />
                ))}
            </Wrap>
        </div>
    );
};

export default observer(HomePage);
