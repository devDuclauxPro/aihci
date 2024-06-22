import { App } from "App";
import { ArticleScientifique } from "components/authComponent/admin/displayComponent/articleScientifique";
import { AuthAdmin } from "components/authComponent/admin/displayComponent/authAdmin";
import { InscritFormation } from "components/authComponent/admin/displayComponent/inscritFormation";
import { Preocupation } from "components/authComponent/admin/displayComponent/preocupation";
import { AjoutDoc } from "components/authComponent/admin/formComponent/ajoutDoc";
import { AjoutTitre } from "components/authComponent/admin/formComponent/ajoutTitreFormation";
import { RedigerArticle } from "components/authComponent/admin/formComponent/redigerArticle";
import { TelechargerDoc } from "components/authComponent/membre/displayComponent/telechargerDoc";
import { InscrireFormation } from "components/authComponent/membre/formComponent/inscrireFormation";
import { RedigerPreocupation } from "components/authComponent/membre/formComponent/redigerPreocupation";
import { SoumettreResume } from "components/authComponent/membre/formComponent/soumettreResume";
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
      <Route path="telecharger-les-documents" element={<TelechargerDoc />} />
      <Route path="soumettre-une-preocupation" element={<RedigerPreocupation />} />
      <Route path="inscription-formation" element={<InscrireFormation />} />
      <Route path="soumettre-mon-resume" element={<SoumettreResume />} />
      <Route path="admin" element={<AuthAdmin />}>
        <Route index element={<Admin />} />
        <Route path="rediger-article" element={<RedigerArticle />} />
        <Route path="ajouter-un-document" element={<AjoutDoc />} />
        <Route path="ajoute-le-titre-de-la-formation" element={<AjoutTitre />} />
        <Route path="voir-les-articles-soumis" element={<ArticleScientifique />} />
        <Route path="voir-les-inscrits-de-la-formation" element={<InscritFormation />} />
        <Route path="voir-les-preocupations" element={<Preocupation />} />
      </Route>
    </Route>
    <Route path="*" element={<ErrorPage />} />
  </Route>
);

// Création du routeur
export const router = createBrowserRouter(routes);
