import React from 'react'
import { Grid, Box } from '@chakra-ui/core'

export default function Result({ data }) {
    return (
        <Grid templateColumns="repeat(5, 1fr)" gap={2} m={4} mt={5}>
            {data.map((d, i) => (<Box w="100%" h={300} bg="blue.500">{d.name}</Box>))}



        </Grid>
    )
}
