import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Box, Skeleton } from '@chakra-ui/core'
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import Team from './Components/Team'
import { useIntersection } from 'react-use';



function App() {
  const [team, setTeam] = useState([]);


 



  return (
    <Box bg='grey.400'>
      <Navbar />
      <Team team={team} setTeam={setTeam} />
      <Search setTeam={setTeam}/>

    </Box>

  );
}

export default App;
