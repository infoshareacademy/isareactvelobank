import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
    theme: 'light',
    setTheme: () => {}    
});

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    return <ThemeContext.Provider value={
        {
            theme,
            setTheme
        }
    }>
        {children}
    </ThemeContext.Provider>
}

export const useThemeContext = () => useContext(ThemeContext);