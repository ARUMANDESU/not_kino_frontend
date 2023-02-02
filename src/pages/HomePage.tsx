import React, { useEffect } from "react";
import { observer } from "mobx-react";
import movieStore from "../stores/MovieStore";
import MovieCompHmPg from "../components/MovieCompHmPg";

const HomePage = () => {
    useEffect(() => {
        movieStore.getMovies();
    }, []);

    return (
        <div>
            {movieStore.movies.map((movie) => (
                <MovieCompHmPg movie={movie} />
            ))}
        </div>
    );
};

export default observer(HomePage);
