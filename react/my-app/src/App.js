import Wrapper from './Wrapper';
import AboutMe from './about-me/AboutMe';
import { Game } from './game/Game';
import { Users } from './users/Users';

function App() {
  return (
    <Wrapper>
        <AboutMe />
        <Game name="Cywilizacja 5" />
        <Users />
    </Wrapper>
  );
}

export default App;
