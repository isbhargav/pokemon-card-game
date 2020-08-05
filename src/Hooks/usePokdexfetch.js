import React, { useState } from 'react'
import { useAsync } from 'react-use'
export default function usePokdexfetch() {
    const [offset, setOffset] = useState(0);

    //load inital pokemons
    const state = useAsync(async () => {
        const URL = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
        const res = await fetch(URL);
        const data1 = await res.json();
        const pokedata = data1.results.map(d => fetch(d.url).then(d => d.json()))
        const data = await Promise.all(pokedata)
        console.log("hiwm")
        return data;
    }, [offset])

    return [state, setOffset];

}