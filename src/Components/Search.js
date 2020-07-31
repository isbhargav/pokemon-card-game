import React from 'react'
import { Grid, Button, Input, Stack, Box, Heading } from '@chakra-ui/core'
export default function Search() {
    return (
        <>
            <Stack alignItems='center' spacing={4} my={4}>
                <Box>
                    <Heading >PokéDéx</Heading>
                </Box>
                <Stack isInline>
                    <Input variant="filled" placeholder="Pikachu" width={300} />
                    <Button variantColor="teal" size="md">Search</Button>
                </Stack>

            </Stack>
            <Grid templateColumns="repeat(5, 1fr)" gap={2} m={4} mt={5}>
                <Box w="100%" h={300} bg="blue.500" />
                <Box w="100%" h={300} bg="blue.500" />
                <Box w="100%" h={300} bg="blue.500" />
                <Box w="100%" h={300} bg="blue.500" />
                <Box w="100%" h={300} bg="blue.500" />
                <Box w="100%" h={300} bg="blue.500" />
                <Box w="100%" h={300} bg="blue.500" />
                <Box w="100%" h={300} bg="blue.500" />
                <Box w="100%" h={300} bg="blue.500" />
                <Box w="100%" h={300} bg="blue.500" />
                <Box w="100%" h={300} bg="blue.500" />

            </Grid>
        </>
    )
}
