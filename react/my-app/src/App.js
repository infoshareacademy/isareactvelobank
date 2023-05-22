import { Navigation } from './navigation/Navigation';
import Wrapper from './Wrapper';
import AboutMe from './about-me/AboutMe';
import { Game } from './game/Game';
import { GameClass } from './game/GameClass';
import { Users } from './users/Users';
import { MyForm } from './form/MyForm';
import { MyBetterForm } from './form/MyBetterForm';
import { MyBoostedForm } from './form/MyBoostedForm';

function App() {
  return (
    <>
        <Navigation />
        <Wrapper>
            <MyBoostedForm />
            <MyBetterForm />
            <MyForm />
            <AboutMe />
            <Game name="Cywilizacja 5" />
            <GameClass name="Fallout" />
            <Users />
        </Wrapper>
    </>
  );
}

export default App;