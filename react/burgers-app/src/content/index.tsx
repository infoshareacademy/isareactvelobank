import { Route, Routes } from "react-router-dom";
import { Home } from './home';
import { Admin } from './admin';
import { Menu } from './menu';

export const Content = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
    </Routes>
)
