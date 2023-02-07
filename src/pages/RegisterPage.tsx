import React from "react";
import { userStore } from "../stores/UserStore";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const RegisterPage = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        await userStore.register({
            username: data.get("username") as string,
            email: data.get("email") as string,
            password: data.get("password") as string,
        });
        // eslint-disable-next-line no-restricted-globals
        location.assign("/");
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Flex
                    minH={"100vh"}
                    align={"center"}
                    justify={"center"}
                    bg={useColorModeValue("gray.150", "gray.800")}
                >
                    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                        <Stack align={"center"}>
                            <Heading fontSize={"4xl"}>
                                {"  "}Create you account{"  "}
                            </Heading>
                        </Stack>
                        <Box
                            rounded={"lg"}
                            bg={useColorModeValue("gray.300", "gray.700")}
                            boxShadow={"lg"}
                            p={8}
                            m={8}
                        >
                            <Stack spacing={4}>
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input name="username" type="username" />
                                </FormControl>
                                <FormControl id="username">
                                    <FormLabel>Username</FormLabel>
                                    <Input name="username" type="username" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input name="password" type="password" />
                                </FormControl>
                                <Stack spacing={10}>
                                    <Stack
                                        direction={{
                                            base: "column",
                                            sm: "row",
                                        }}
                                        align={"start"}
                                        justify={"space-between"}
                                    >
                                        <Link
                                            color={"teal"}
                                            as={ReachLink}
                                            to="/login"
                                        >
                                            Already have an account ?
                                        </Link>
                                    </Stack>
                                    <Button
                                        bg={"teal"}
                                        color={"white"}
                                        _hover={{
                                            bg: "blue.500",
                                        }}
                                        type="submit"
                                    >
                                        Sign up
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Flex>
            </form>
        </div>
    );
};

export default RegisterPage;
