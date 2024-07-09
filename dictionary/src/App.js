import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Container from '@mui/material/Container'
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';



function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState([]);
  const [category, setCategory] = useState("en");

  const dictionaryApi = async () => {
    try {
      // https://dictionaryapi.dev/ this is free dictionary api
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeaning(data.data)
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meaning);


  useEffect(() => {
    dictionaryApi();
  }, [word, category])

  return (
    <div className="App" style={{ height: '100vh', backgroundColor: '#282c34', color: 'white' }}>
      <Container maxWidth="xl" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} />
        <Definitions />
      </Container>
    </div>
  );
}

export default App;
