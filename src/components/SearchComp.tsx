import React, { useEffect, useRef, useState } from "react";
import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Input,
    InputGroup,
    InputRightElement,
    StackDivider,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { IMovie, url } from "../models/types";
import { useDebounce } from "../hooks/debounce";
import axios from "axios";
import MovieSearchComp from "./MovieSearchComp";

const SearchComp = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);
    const [movies, setMovies] = useState([] as IMovie[]);
    const [search, setSearch] = useState("");
    const debounced = useDebounce(search);

    useEffect(() => {
        if (debounced.length > 3) {
            const data = { payload: debounced };
            axios
                .post(`${url}/movie/search`, data)
                .then((res) => {
                    setMovies(res.data);
                })
                .catch((err) => console.error(err));
        }
    }, [debounced]);

    return (
        <Box mx="1%">
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                <BsSearch />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader mt="7">
                        <Input
                            placeholder="Search ... "
                            colorScheme="teal"
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                        />
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack
                            divider={<StackDivider borderColor="gray.200" />}
                            spacing={4}
                            align="stretch"
                        >
                            {movies.map((movie) => (
                                <MovieSearchComp
                                    key={movie._id}
                                    movie={movie}
                                />
                            ))}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default SearchComp;
