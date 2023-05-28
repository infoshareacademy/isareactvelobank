import React from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './Components/Counter';
import TextTransformer from './Components/TextTransformer';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <Counter />
      <hr/>
      <TextTransformer value="foo bar span" />
    </div>
  );
}

export default App;
