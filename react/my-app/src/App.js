import Wrapper from './Wrapper';
import AboutMe from './about-me/AboutMe';
import { Game } from './game/Game';

function App() {
  return (
    <Wrapper>
        <AboutMe />
        <Game name="Cywilizacja 5" />
    </Wrapper>
  );
}

export default App;
