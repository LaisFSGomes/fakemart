import React from "react";
import { Cart, Home, Login, Product, Register } from "features";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PagesRoutes } from "features/constants";

export const Router: React.FC = () => (
    <BrowserRouter>
        <Routes>
        <Route path={PagesRoutes.home} element={<Home />} />
        <Route path={PagesRoutes.category} element={<Home />} />
        <Route path={PagesRoutes.product} element={<Product />} />
        <Route path={PagesRoutes.cart} element={<Cart />} />
        <Route path={PagesRoutes.login} element={<Login />} />
        <Route path={PagesRoutes.register} element={<Register />} />
        </Routes>
    </BrowserRouter>
);