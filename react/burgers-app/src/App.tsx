import { Navigation } from "./navigation";
import { Content } from "./content";
import { UserContextProvider } from "./controllers/user-context";

function App() {
  return (
    <UserContextProvider>
        <Navigation />
        <Content />
    </UserContextProvider>
  );
}

export default App;
