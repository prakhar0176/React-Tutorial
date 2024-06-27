import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Container from '@mui/material/Container'
import Header from './components/Header/Header';



function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState([]);
  const [category, setCategory] = useState("en");

  const dictionaryApi = async () => {
    try {
      // https://dictionaryapi.dev/ this is free dictionary api
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      );
      setMeaning(data.data)
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meaning);


  useEffect(() => {
    dictionaryApi();
  }, [])

  return (
    <div className="App" style={{ height: '100vh', backgroundColor: '#282c34', color: 'white' }}>
      <Container maxWidth="md" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} />
      </Container>

    </div>
  );
}

export default App;
