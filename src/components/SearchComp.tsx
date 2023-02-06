import React, { useRef } from "react";
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
    useDisclosure,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchComp = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);
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
                        <Input placeholder="Search ... " colorScheme="teal" />
                    </DrawerHeader>
                    <DrawerBody></DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default SearchComp;
