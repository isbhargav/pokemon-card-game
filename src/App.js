import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Box } from '@chakra-ui/core'
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import Team from './Components/Team'
import { useIntersection } from 'react-use';
import Result from './Components/Result'
import usePokdexfetch from './Hooks/usePokdexfetch'



function App() {
  const [team, setTeam] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [state, setOffset] = usePokdexfetch();
  const loadRef = useRef();
  const intersection = useIntersection(loadRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  })

  // load offset data
  useEffect(() => {
    if (state.value) { setPokedex(s => [...s, ...state.value]); console.log(state.value) }
  }, [setPokedex, state.value]);
  // load more
  useEffect(() => {
    if (intersection && intersection.intersectionRatio === 1) {
      setOffset(s => s + 10)
    }
  }, [intersection, setOffset])



  return (
    <Box bg='grey.400'>
      <Navbar />
      <Team />
      <Search />
      <Result data={pokedex} />
      <div ref={loadRef}></div>

    </Box>

  );
}

export default App;
