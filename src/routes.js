import Home from "views/Home";
import Demographics from "views/Demographics";
import SignificantFactors from "views/SignificantFactors";
import Location from "views/Location";
import Clusters from "views/Clusters";


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
    component: Demographics,
    layout: "/app",
  },
  {
    path: "/significant-factors",
    name: "Significant Factors",
    icon: "nc-icon nc-chart-bar-32",
    component: SignificantFactors,
    layout: "/app",
  },
  {
    path: "/time-away-from-home",
    name: "Time Away From Home",
    icon: "nc-icon nc-compass-05",
    component: Location,
    layout: "/app",
  },
  {
    path: "/k-means-clusters",
    name: "COVID-19 Risk Clusters",
    icon: "nc-icon nc-single-02",
    component: Clusters,
    layout: "/app",
  },
];
export default routes;
