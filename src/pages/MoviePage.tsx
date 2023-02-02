import React, { useEffect } from "react";
import movieStore from "../stores/MovieStore";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

const MoviePage = () => {
    const { id } = useParams();

    useEffect(() => {
        movieStore.getOneMovie(id).then(() => {
            console.log(movieStore);
        });
    }, []);

    return (
        <div>
            <img src={movieStore.poster.url} alt={movieStore.title} />
            <h2>{movieStore.title}</h2>
            <p>Description: {movieStore.description}</p>
            <h2>length:{movieStore.length}</h2>
            {movieStore.watchability.items?.map((item) => (
                <a href={item.url}>
                    <img src={item.logo.url} alt={item.name} />
                    <h4>{item.name}</h4>
                </a>
            ))}
            <h2>{movieStore.title}</h2>
        </div>
    );
};

export default observer(MoviePage);