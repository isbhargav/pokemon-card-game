import React, { useState } from 'react'
import { useAsyncFn } from 'react-use'
import { Grid, Button, Input, Stack, Box, Heading } from '@chakra-ui/core'
export default function Search({ setPokedex }) {
    const [query, setQuery] = useState('');



    
    const handleClick = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/';
        try {
            const res = await fetch(url + query);
            const data = await res.json();
            setPokedex([data])
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <Stack alignItems='center' spacing={4} my={4}>
            <Box>
                <Heading >PokéDéx</Heading>
            </Box>
            <Stack isInline>
                <Input variant="filled" placeholder="Pikachu" value={query} onChange={e => setQuery(e.target.value)} width={300} />
                <Button variantColor="teal" size="md" onClick={handleClick}>Search</Button>
            </Stack>

        </Stack>


    )
}
