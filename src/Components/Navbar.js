import React from 'react'
import { Box, Heading } from "@chakra-ui/core";

export default function Navbar() {
    return (
        <Box bg='blue.300'>
            <Heading as='h1' fontFamily='mono' textAlign='center' fontStyle='italic' color='white'>Pokémon</Heading>
        </Box>

    );
}