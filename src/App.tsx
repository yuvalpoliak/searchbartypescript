import React, { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField'
import List from './list';

function App(): JSX.Element {
  const [inputText, setInputText] = useState<string>('')
  let inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    var lowerCase = event.target.value.toLowerCase()
    setInputText(lowerCase)
  }
  return (
  <div className='container'>
    <h1>neighorhoods in haifa</h1>
    <div className='searchdiv'>
      <TextField 
      id='outlined-basic' 
      variant='outlined' 
      fullWidth 
      label='Search'
      onChange={inputHandler}></TextField>
    </div>
    <List input={inputText}/>
  </div>
  );
}

export default App;
