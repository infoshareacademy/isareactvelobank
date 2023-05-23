import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Wrapper from '../Wrapper';
import { Game } from '../game/Game';
import { GameClass } from '../game/GameClass';
import { UserDetails } from '../users/UserDetails';
import { MyForm } from '../form/MyForm';
import { MyBetterForm } from '../form/MyBetterForm';
import { MyBoostedForm } from '../form/MyBoostedForm';
import { Sign } from '../sign/Sign';
import Spinner from 'react-bootstrap/Spinner';

const LazyAboutMe = lazy(() => import('../about-me/AboutMe'));
const LazyUsers = lazy(() => import('../users/Users').then(module => ({ default: module.Users })))

export const Content = () => (
    <Wrapper>
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path="/" element={<h1>Witaj na mojej stronie!</h1>} />
                <Route path="/about-me" element={<LazyAboutMe />} />
                <Route path="/form" element={<>
                        <MyBoostedForm />
                        <MyBetterForm />
                        <MyForm />
                    </>} />
                <Route path="/game" element={<>
                        <Game name="Cywilizacja 5" />
                        <GameClass name="Fallout" />
                    </>} />
                <Route path="/users" element={<LazyUsers />} />
                <Route path="/users/:id" element={<UserDetails />} />
                <Route path="/sign" element={<Sign />} />
                <Route path="*" element={<h1>Taka stronie nie istnieje.</h1>} />
            </Routes>
        </Suspense>
    </Wrapper>
)