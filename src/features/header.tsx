import React from "react";
import { Link, Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import './header.css';

const Header = () => {

    return (
        <Box bg="gray.800" color="white" py={4}>
            <Flex maxW="1200px" mx="auto" px={4}>
                <Heading as="h1" style={{ padding: '20px' }} fontSize="xl" fontWeight="bold">
                    <Link href="/" color="blue.500" fontWeight="bold">
                        User Information Form
                    </Link>
                </Heading>
                <Spacer />
            </Flex>
        </Box >
    );

}

export default Header;