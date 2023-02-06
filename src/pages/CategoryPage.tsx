import React, { useEffect } from "react";
import movieStore from "../stores/MovieStore";
import { Wrap } from "@chakra-ui/react";
import MovieCompHmPg from "../components/MovieCompHmPg";
import { useSearchParams } from "react-router-dom";
import { observer } from "mobx-react";

const CategoryPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        movieStore.getMovies(100, searchParams.get("category"));
    }, [searchParams]);

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

export default observer(CategoryPage);
