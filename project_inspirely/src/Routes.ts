// routes.ts
import React from "react";
import GroupPage from "./components/spaces/IndividualGroupSpace/GroupPage";
import Spaces from "./pages/spaces";

interface Route {
  path: string;
  name: string;
  Component: React.ComponentType;
  exact?: boolean;
}

const routes: Route[] = [
    //Route to Individual Group Space
  { path: '/groups', name: 'Groups', Component: GroupPage, exact: true },
    //Route to Group Space
  { path: '/spaces', name: 'Spaces', Component: Spaces, exact: true },
];

export default routes;
