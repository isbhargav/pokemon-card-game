import React, { useState } from 'react'
import { useAsync } from 'react-use'
export default function usePokdexfetch() {
    const [offset, setOffset] = useState(0);

    //load inital pokemons
    const state = useAsync(async () => {
        const URL = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`
        const res = await fetch(URL);
        const data = await res.json();
        return data.results;
    }, [offset])

    return [state, setOffset];

}