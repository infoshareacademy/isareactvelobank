import Wrapper from './Wrapper';
import AboutMe from './about-me/AboutMe';
import { Game } from './game/Game';
import { GameClass } from './game/GameClass';
import { Users } from './users/Users';
import { MyForm } from './form/MyForm';
import { MyBetterForm } from './form/MyBetterForm';

function App() {
  return (
    <Wrapper>
        <MyBetterForm />
        <MyForm />
        <AboutMe />
        <Game name="Cywilizacja 5" />
        <GameClass name="Fallout" />
        <Users />
    </Wrapper>
  );
}

export default App;
