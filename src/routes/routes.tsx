import { App } from "App";
import { ArticleScientistComponent } from "components/authComponent/admin/displayComponent/articleScientistComponent";
import { AuthAdminComponent } from "components/authComponent/admin/displayComponent/authAdminComponent";
import { RegisteredTrainingComponent } from "components/authComponent/admin/displayComponent/registeredTrainingComponent";
import { AddDocumentForm } from "components/authComponent/admin/formComponent/addDocumentForm";
import { AddTitleTrainingForm } from "components/authComponent/admin/formComponent/addTitleTrainingForm";
import { WriteArtcleForm } from "components/authComponent/admin/formComponent/writeArtcleForm";
import { ArticleSubmittedComponent } from "components/authComponent/member/displayComponent/articleSubmittedComponent";
import { ConcernComponent } from "components/authComponent/member/displayComponent/concernComponent";
import { DownloadComponent } from "components/authComponent/member/displayComponent/downloadComponent";
import { RegisterTrainingComponent } from "components/authComponent/member/displayComponent/registerTrainingComponent";
import { Admin } from "pages/admin";
import { Article } from "pages/article";
import { Association } from "pages/association";
import { Auth } from "pages/auth";
import { Connection } from "pages/connection";
import { ErrorPage } from "pages/errorPage";
import { Home } from "pages/home";
import { Internat } from "pages/internat";
import { Member } from "pages/member";
import { News } from "pages/news";
import { Partner } from "pages/partner";
import { Registration } from "pages/registration";

import { WhoAreUs } from "pages/whoAreUs";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// Création des éléments de route
const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="accueil" element={<Home />} />
    <Route path="linternat" element={<Internat />} />
    <Route path="notre-association" element={<Association />} />
    <Route path="nos-partenaires" element={<Partner />} />
    <Route path="actualites" element={<News />} />
    <Route path="qui-sommes-nous" element={<WhoAreUs />} />
    <Route path="se-connecter" element={<Connection />} />
    <Route path="inscription" element={<Registration />} />
    <Route path="accueil/article/:id" element={<Article />} />
    <Route path="espace-membre" element={<Auth />}>
      <Route index element={<Member />} />
      <Route path="telecharger-les-documents" element={<DownloadComponent />} />
      <Route path="soumettre-une-preocupation" element={<ConcernComponent />} />
      <Route path="inscription-formation" element={<RegisterTrainingComponent />} />
      <Route path="soumettre-mon-resume" element={<ArticleSubmittedComponent />} />
      <Route path="admin" element={<AuthAdminComponent />}>
        <Route index element={<Admin />} />
        <Route path="rediger-article" element={<WriteArtcleForm />} />
        <Route path="ajouter-un-document" element={<AddDocumentForm />} />
        <Route path="ajoute-le-titre-de-la-formation" element={<AddTitleTrainingForm />} />
        <Route path="voir-les-articles-soumis" element={<ArticleScientistComponent />} />
        <Route path="voir-les-inscrits-de-la-formation" element={<RegisteredTrainingComponent />} />
        <Route path="voir-les-preocupations" element={<ConcernComponent />} />
      </Route>
    </Route>
    <Route path="*" element={<ErrorPage />} />
  </Route>
);

// Création du routeur
export const router = createBrowserRouter(routes);
