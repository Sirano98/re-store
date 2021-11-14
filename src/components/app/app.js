import React from 'react';
import './app.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';

const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                exact
                element={<HomePage />} />
            <Route
                path="/cart"
                element={<CartPage />} />

        </Routes>
    )
};

export default App;