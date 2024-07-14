import React from 'react';
import './Header.css';
import { MenuItem, TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import categories from '../../data/category';
import debounce from 'lodash/debounce';


const Header = ({ category, setCategory, word, setWord, LightMode }) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: LightMode ? '#000' : '#fff',
            },
            mode: LightMode ? 'light' : 'dark'
        },
    });

    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    }

    const handleText = debounce((text) => {
        setWord(text)
    }, 1000);
    return (
        <div className='header'>
            <span className='title'>{word ? word : 'Word Hunt'}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField className='search' id="standard-basic" variant="standard" label="Search a Word" onChange={(e) => handleText(e.target.value)} />
                    <TextField
                        className='select'
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}
                        variant="standard"
                    >
                        {
                            categories.map((option) => (
                                <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                            ))
                        }

                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header