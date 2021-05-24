import { lazy } from "react";

const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/homePage" /*webpackChunkName:'HomePage'*/)
    ),
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: "Contacts",
    path: "/contacts",
    exact: false,
    component: lazy(() =>
      import(
        "../components/contacts/Contacts" /*webpackChunkName:'ContactsPage'*/
      )
    ),
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: "Registration",
    path: "/register",
    exact: true,
    component: lazy(() =>
      import("../pages/registerPage" /*webpackChunkName:'RegistrationPage'*/)
    ),
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "Login",
    path: "/login",
    exact: true,
    component: lazy(() =>
      import("../pages/loginPage" /*webpackChunkName:'LoginPage'*/)
    ),
    isPrivate: false,
    isRestricted: true,
  },
];
export default mainRoutes;
