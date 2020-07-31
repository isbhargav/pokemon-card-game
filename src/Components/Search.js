import React from 'react'
import { Grid, Button, Input, Stack, Box, Heading } from '@chakra-ui/core'
export default function Search() {
    return (

        <Stack alignItems='center' spacing={4} my={4}>
            <Box>
                <Heading >PokéDéx</Heading>
            </Box>
            <Stack isInline>
                <Input variant="filled" placeholder="Pikachu" width={300} />
                <Button variantColor="teal" size="md">Search</Button>
            </Stack>

        </Stack>


    )
}
