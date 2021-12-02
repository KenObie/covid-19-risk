import Home from "views/Home";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";

var routes = [
  {
    path: "/home",
    name: "Home",
    icon: "nc-icon nc-app",
    component: Home,
    layout: "/app",
  },
  {
    path: "/county-demographics",
    name: "County Demographics",
    icon: "nc-icon nc-globe",
    component: Icons,
    layout: "/app",
  },
  {
    path: "/significant-factors",
    name: "Significant Factors",
    icon: "nc-icon nc-chart-bar-32",
    component: Maps,
    layout: "/app",
  },
  {
    path: "/time-away-from-home",
    name: "Time Away From Home",
    icon: "nc-icon nc-compass-05",
    component: Notifications,
    layout: "/app",
  },
  {
    path: "/k-means-clusters",
    name: "COVID-19 Risk Clusters",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/app",
  },
];
export default routes;
