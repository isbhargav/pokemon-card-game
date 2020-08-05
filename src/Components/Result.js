import React from 'react'
import { Grid, Box, Image, Text, Flex, Button } from '@chakra-ui/core'

export default function Result({ data, setTeam }) {

    const add = (d) => { setTeam(s => [...s, d]) };


    return (
        <Grid templateColumns="repeat(5, 1fr)" gap={2} m={4} mt={5}>
            {data.map((d) => (<Box w="100%" key={d.id} shadow='sm' >
                <Flex justifyContent='center'><Image src={d.sprites.front_default}></Image></Flex>
                <Text textAlign='center'>{d.name}</Text>
                <Flex justifyContent='center' m={5}>
                    <Button leftIcon='add' size='lg' onClick={e => add(d)}>Add</Button>
                </Flex>
            </Box>))}



        </Grid>
    )
}
