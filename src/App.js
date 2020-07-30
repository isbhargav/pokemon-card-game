import React, { useState } from 'react';
import './App.css';
import { Box } from '@chakra-ui/core'
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import Team from './Components/Team'

function App() {
  const [team, setTeam] = useState([]);

  return (
    <Box bg='grey.400'>
      <Navbar />
      <Team />
      <Search />
    </Box>

  );
}

export default App;
