import React from 'react';
import './Header.css';
import { MenuItem, TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import categories from '../../data/category';

const Header = ({ category, setCategory, word, setWord }) => {
    const darkTheme = createTheme({
        palette: {
            text: {
                primary: {
                    main: '#fff',
                },
            },
            mode: 'dark'
        },
    });
    return (
        <div className='header'>
            <span className='title'>{word ? word : 'Word Hunt'}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField className='search' id="standard-basic" variant="standard" label="Search a Word" value={word} onChange={(e) => setWord(e.target.value)} />
                    <TextField
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        variant="standard"
                    >
                        {/* {
                            categories.map((option) => {
                                <MenuItem key={option.label}>{option.value}</MenuItem>
                            })
                        } */}

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