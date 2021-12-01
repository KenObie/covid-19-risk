import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";

var routes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: "nc-icon nc-app",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "County Demographics",
    icon: "nc-icon nc-globe",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Significant Factors",
    icon: "nc-icon nc-chart-bar-32",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Time Away From Home",
    icon: "nc-icon nc-compass-05",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "COVID-19 Risk Clusters",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
];
export default routes;
