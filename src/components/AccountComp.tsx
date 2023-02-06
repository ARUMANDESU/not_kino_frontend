import React from "react";
import {
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { userStore } from "../stores/UserStore";
import { IoArrowForward } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

function ChevronDownIcon() {
    return null;
}

const AccountComp = () => {
    const user = userStore.user;
    const navigate = useNavigate();
    function btnOnClick() {
        navigate("login");
    }
    if (!user.loggedIn) {
        return (
            <>
                <Button
                    rightIcon={<IoArrowForward />}
                    colorScheme="teal"
                    variant="outline"
                    onClick={btnOnClick}
                >
                    Log in
                </Button>
            </>
        );
    }
    return (
        <>
            <Menu>
                <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                >
                    <Avatar
                        size="md"
                        name={user.username}
                        src={user.avatar_url}
                    />
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        <Link to={`/user/${user.username}`}>Account</Link>
                    </MenuItem>
                    <MenuItem>Logout</MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};

export default AccountComp;
