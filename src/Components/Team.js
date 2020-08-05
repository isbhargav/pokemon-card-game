import React from 'react'
import { Box, Grid, Button, Text, Flex, Image } from '@chakra-ui/core'
export default function Team({ team, setTeam }) {
    const remove = (idx) => { setTeam(s => s.filter((sd, id) => id !== idx)) };
    return (
        <Grid templateColumns="repeat(6, 1fr)" gap={2} m={4} mt={5}>
            {team.map((d, idx) => (<Box w="100%" key={d.id} shadow='sm' >
                <Flex justifyContent='center'><Image src={d.sprites.front_default}></Image></Flex>
                <Text textAlign='center'>{d.name}</Text>
                <Flex justifyContent='center' m={5}>
                    <Button leftIcon='minus' size='lg' onClick={e => remove(idx)}>Remove</Button>
                </Flex>
            </Box>))}



        </Grid>
    )
}
