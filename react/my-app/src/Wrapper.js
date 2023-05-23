import { useThemeContext } from "./contexts/theme/ThemeContext";

const Wrapper = ({ children }) => {
    const { theme } = useThemeContext();

    return <div style={
        {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '25px',
            color: theme === 'dark' ? 'white' : 'black',
            backgroundColor: theme === 'dark' ? 'black' : 'white',
            height: 'calc(100vh - 56px)'
        }
    }>
        {children}
    </div>
}

export default Wrapper;