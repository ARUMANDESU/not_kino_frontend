import React, { useEffect } from "react";
import movieStore from "../stores/MovieStore";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { Button } from "@chakra-ui/react";
import { FcLike } from "react-icons/fc";
import axios from "axios";

const MoviePage = () => {
    const { id } = useParams();

    useEffect(() => {
        movieStore.getOneMovie(id).then(() => {
            console.log(movieStore);
        });
    }, [id]);
    const LikeBtnHandler = async () => {
        await axios
            .post(
                `${process.env.REACT_APP_BACKEND_BASE_URL}/user/addMovie/${id}`
            )
            .then((res) => {
                console.log(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div>
            <img src={movieStore.poster.url} alt={movieStore.title} />
            <h2>{movieStore.title}</h2>
            <p>Description: {movieStore.description}</p>
            <h2>length:{movieStore.length}</h2>
            <Button onClick={LikeBtnHandler}>
                <FcLike />
            </Button>
            {movieStore.watchability.items?.map((item) => (
                <>
                    <a href={item.url}>
                        <img
                            src={item.logo.url.slice(5)}
                            alt={"logo"}
                            width={"35"}
                            height={"35"}
                        />
                        <h4>{item.name}</h4>
                    </a>
                </>
            ))}
        </div>
    );
};

export default observer(MoviePage);
