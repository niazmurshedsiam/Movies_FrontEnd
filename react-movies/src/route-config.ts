import LandingPage from "./LandingPage/LandingPage";
import IndexGenres from "./genres/IndexGenres";

const routes = [
    { path: "/", component: LandingPage, exact: true },
    { path: "/genres", component: IndexGenres },
]
export default routes;