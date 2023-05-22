import { Routes, Route } from 'react-router-dom'; 
import Wrapper from '../Wrapper';
import AboutMe from '../about-me/AboutMe';
import { Game } from '../game/Game';
import { GameClass } from '../game/GameClass';
import { Users } from '../users/Users';
import { UserDetails } from '../users/UserDetails';
import { MyForm } from '../form/MyForm';
import { MyBetterForm } from '../form/MyBetterForm';
import { MyBoostedForm } from '../form/MyBoostedForm';
import { Sign } from '../sign/Sign';

export const Content = () => (
    <Wrapper>
        <Routes>
            <Route path="/" element={<h1>Witaj na mojej stronie!</h1>} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/form" element={<>
                    <MyBoostedForm />
                    <MyBetterForm />
                    <MyForm />
                </>} />
            <Route path="/game" element={<>
                    <Game name="Cywilizacja 5" />
                    <GameClass name="Fallout" />
                </>} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="*" element={<h1>Taka stronie nie istnieje.</h1>} />
        </Routes>
    </Wrapper>
)