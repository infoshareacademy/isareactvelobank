 import { createContext, useState } from 'react';
 import { Navigation } from './navigation/Navigation';
 import { Content } from './content/Content';

 export const ThemeContext = createContext('dark');

function App() {
    const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={theme}>
        <Navigation />
        <div>
            <button onClick={() => setTheme('dark')}>dark</button>
            <button onClick={() => setTheme('light')}>light</button>
        </div>
        <Content />
    </ThemeContext.Provider>
  );
}

export default App;