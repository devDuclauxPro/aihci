import { App } from "App";
import { AuthAdmin } from "components/admin/affichage/authAdmin";
import { RedactionArticle } from "components/admin/formulaire/redactionArticle";
import { ArticleScientifique } from "components/admin/visuel/articleScientifique";
import { Preocupation } from "components/admin/visuel/preocupation";
import { Actualite } from "pages/actualite";
import { Admin } from "pages/admin";
import { Article } from "pages/article";
import { Association } from "pages/association";
import { Auth } from "pages/auth";
import { Connexion } from "pages/connexion";
import { ErrorPage } from "pages/errorPage";
import { Home } from "pages/home";
import { Inscription } from "pages/inscription";
import { Internat } from "pages/internat";
import { Membre } from "pages/membre";
import { Partenaire } from "pages/partenaire";
import { Procuration } from "pages/procuration";
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
    <Route path="inscription" element={<Inscription />} />
    <Route path="accueil/article/:id" element={<Article />} />
    <Route path="espace-membre" element={<Auth />}>
      <Route index element={<Membre />} />
      <Route path="espace-membre" element={<Procuration />} />
      <Route path="admin" element={<AuthAdmin />}>
        <Route index element={<Admin />} />
        <Route path="rediger-article" element={<RedactionArticle />} />
        <Route path="voir-les-articles-soumis" element={<ArticleScientifique />} />
        <Route path="voir-les-preocupations" element={<Preocupation />} />
      </Route>
      <Route path="telecharher-les-procurations" element={<Procuration />} />
    </Route>
    <Route path="*" element={<ErrorPage />} />
  </Route>
);

// Création du routeur
export const router = createBrowserRouter(routes);
