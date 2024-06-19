import { App } from "App";
import { Actualite } from "pages/actualite";
import { Association } from "pages/association";
import { Connexion } from "pages/connexion";
import { Home } from "pages/home";
import { Internat } from "pages/internat";
import { Partenaire } from "pages/partenaire";
import { QuiSommesNous } from "pages/quiSommesNous";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// Création des éléments de route
const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="accueil" element={<Home />} />
    <Route path="linternat" element={<Internat />} />
    <Route path="notre-association" element={<Association />} />
    <Route path="nos-partenaires" element={<Partenaire />} />
    <Route path="actualites" element={<Actualite />} />
    <Route path="qui-sommes-nous" element={<QuiSommesNous />} />
    <Route path="se-connecter" element={<Connexion />} />
  </Route>
);

// Création du routeur
export const router = createBrowserRouter(routes);
