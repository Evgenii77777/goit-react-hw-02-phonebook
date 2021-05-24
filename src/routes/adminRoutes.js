import { lazy } from "react";

const adminRoutes = [
  {
    name: "Contacts",
    path: "/contacts",
    exact: true,
    component: lazy(() =>
      import("../components/contacts/Contacts" /*webpackChunkName:'Contacts'*/)
    ),
  },
];
export default adminRoutes;
