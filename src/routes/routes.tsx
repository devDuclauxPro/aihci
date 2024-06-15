
import { App } from "App";
import { Home } from "pages/home";
import { Internat } from "pages/internat";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// Création des éléments de route
const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="accueil" element={<Home />} />
    <Route path="linternat" element={<Internat />} />
  </Route>
);

// Création du routeur
export const router = createBrowserRouter(routes);
