import React, { useState, useRef, useEffect } from 'react'
import { useIntersection } from 'react-use'
import { Spinner, Button, Input, Stack, Box, Heading, Flex } from '@chakra-ui/core'
import PokedexResult from './PokedexResult'
import usePokdexfetch from '../Hooks/usePokdexfetch'
import '../assets/names.json'

export default function Search({ setTeam }) {
    const [query, setQuery] = useState('');
    const [queryResult, setQueryResult] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [state, setOffset] = usePokdexfetch();


    const loadRef = useRef();
    const intersection = useIntersection(loadRef, {
        root: null,
        rootMargin: '0px',
        threshold: 1
    })

    // when fetch is complete add data to pokedex
    useEffect(() => {
        if (state.value) { setPokedex(s => [...s, ...state.value]); console.log(state.value) }
    }, [setPokedex, state.value]);

    // when we reach bottom increase offset to trigger usePokdexfetch
    useEffect(() => {
        if (intersection && intersection.intersectionRatio === 1) {
            setOffset(s => s + 20)
        }
    }, [intersection, setOffset])

    useEffect(() => {
        setQueryResult([])
    }, [query])



    const handleClick = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/';
        try {
            const res = await fetch(url + query);
            const data = await res.json();
            setQueryResult([data])
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Stack alignItems='center' spacing={4} my={4}>
                <Box>
                    <Heading >PokéDéx</Heading>
                </Box>
                <Stack isInline>
                    <Input variant="filled" placeholder="Pikachu" value={query} onChange={e => setQuery(e.target.value)} width={300} />
                    <Button variantColor="teal" size="md" onClick={handleClick}>Search</Button>
                </Stack>

            </Stack>
            {query.length > 0 ? null : <PokedexResult data={pokedex} setTeam={setTeam} />}
            {query.length > 0 ? (queryResult.length > 0 ? <PokedexResult data={queryResult} setTeam={setTeam} /> : null) : null}
            <div ref={loadRef}></div>
            <Flex justifyContent='center'>

                {query.length > 0 && queryResult.length > 0 ? null : <Spinner
                    thickness="4px"
                    speed="0.85s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                />}
            </Flex>
        </>

    )
}
