import { Navigation } from './navigation/Navigation';
import { Content } from './content/Content';
import { ThemeContextProvider } from './contexts/theme/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
        <Navigation />
        <Content />
    </ThemeContextProvider>
  );
}

export default App;