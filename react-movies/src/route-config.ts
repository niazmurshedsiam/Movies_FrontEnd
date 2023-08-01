import CreateMovieTheaters from "./IndexMovieTheaters/CreateMovieTheaters";
import EditMovieTheaters from "./IndexMovieTheaters/EditMovieTheaters";
import IndexMovieTheaters from "./IndexMovieTheaters/IndexMovieTheaters";
import LandingPage from "./LandingPage/LandingPage";
import CreateActor from "./actors/CreateActor";
import IndexActor from "./actors/IndexActor";
import CreateGenres from "./genres/CreateGenres";
import EditGenres from "./genres/EditGenres";
import IndexGenres from "./genres/IndexGenres";
import CreateMovies from "./movies/CreateMovies";
import EditMovies from "./movies/EditCreateMovies";
import FilterMovies from "./movies/FilterMovies";

const routes = [
    { path: "/", component: LandingPage, exact: true },
    { path: "/genres", component: IndexGenres, exact: true },
    { path: "/genres/create", component: CreateGenres },
    { path: "/genres/edit", component: EditGenres },

    { path: "/actors", component: IndexActor, exact: true },
    { path: "/actors/create", component: CreateActor },
    { path: "/actors/edit", component: EditGenres },

    { path: "/movieTheaters", component: IndexMovieTheaters, exact: true },
    { path: "/movieTheaters/create", component: CreateMovieTheaters },
    { path: "/movieTheaters/edit", component: EditMovieTheaters },

    { path: "/movies/create", component: CreateMovies },
    { path: "/movies/edit", component: EditMovies },
    { path: "/movies/filter", component: FilterMovies }
]
export default routes;