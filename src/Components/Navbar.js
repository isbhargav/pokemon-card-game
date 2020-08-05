import React from 'react'
import { Box, Heading } from "@chakra-ui/core";

export default function Navbar() {
    return (
        <Box bg='blue.300' shadow='md' roundedBottom='md'>
            <Heading size='2xl' as='h1' fontFamily='comic-sans' textAlign='center' fontStyle='italic' color='white'>Pokémon</Heading>
        </Box>

    );
}