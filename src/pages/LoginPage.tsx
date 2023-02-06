import React from "react";
import { userStore } from "../stores/UserStore";
import { Link as ReachLink } from "react-router-dom";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
const LoginPage = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        await userStore.login({
            username: data.get("username") as string,
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
                    bg={useColorModeValue("gray.50", "gray.800")}
                >
                    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                        <Stack align={"center"}>
                            <Heading fontSize={"4xl"}>
                                Sign in to your account
                            </Heading>
                            <Text fontSize={"lg"} color={"gray.600"}>
                                to enjoy our website✌️
                            </Text>
                        </Stack>
                        <Box
                            rounded={"lg"}
                            bg={useColorModeValue("gray.300", "gray.700")}
                            boxShadow={"lg"}
                            p={8}
                        >
                            <Stack spacing={4}>
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
                                            to="/register"
                                        >
                                            Do not have an account ?
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
                                        Sign in
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

export default LoginPage;
