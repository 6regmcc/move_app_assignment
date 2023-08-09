import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "/src/routes/root.jsx"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import DiscoverPage from "./routes/discoverMovies.jsx";
import {loader as discoverLoader} from "./routes/discoverMovies.jsx"
import TemporaryDrawer from "./routes/testpage.jsx";
import {sampleMovie} from "./sampleData.js";
import App from "./App.jsx"
import DetailsPage from "./routes/detailsPage.jsx"
import sampleDetails from "./sampleMovieDetails.js"
import {loader as movieDetailsLoader} from "./routes/detailsPage.jsx"
import TestPage from "./routes/testpage.jsx";

import { createClient } from '@supabase/supabase-js'
import SignIn from "./routes/login.jsx"
import SignUp from "./routes/signUp.jsx";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {UserProvider} from "./context/appContext.jsx";
import {loader as SimilarMoviesLoader} from "./routes/SimilarPage.jsx"
import DiscoverTVPage from "./routes/discoverTv.jsx";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'
import Logout from "./routes/logout.jsx";
import SimilarPage from "./routes/SimilarPage";
import TVDetailsPage from "./routes/tvDetailsPage";
import {loader as TVDetailsLoader} from "./routes/tvDetailsPage.jsx"
import ActorDetailsPage from "./routes/actorDetailsPage.jsx";
import Discover from "./routes/discover.jsx"
import FantasyMovies from "./routes/fantasymovies.jsx";
import CreateFantasyMovie from './routes/createFantasyMovie.jsx'
import CastPage, {loader as castLoader} from './routes/castPage.jsx'
const queryClient = new QueryClient()

const router = createBrowserRouter([

    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/discover",
                element: <Discover/>
            },
            {
                path: "/discover/movies",
                element: <DiscoverPage />,
                loader: discoverLoader
            },
            {
                path: "/discover/tv",
                element: <DiscoverTVPage />

            },
            {
                path: "/movie/:id",
                element: <DetailsPage />,
                loader: movieDetailsLoader
            },
            {
                path: "/movie/:id/cast",
                element: <CastPage />,
                loader: castLoader
            },
            {
                path: "/testpage",
                element: <TestPage />
            },
            {
                path: "/movie/:id/similar",
                element: <SimilarPage />,
                loader: SimilarMoviesLoader
            },
            {
                path: "/tv/:id",
                element: <TVDetailsPage />,
                loader: TVDetailsLoader

            },
            {
                path: '/actor/:id',
                element: <ActorDetailsPage />
            },
            {
                path: "/discover/fantasymovies",
                element: <FantasyMovies />
            },
            {
                path: "/discover/fantasymovies/create",
                element: <CreateFantasyMovie />
            }
        ]
    },

    {
        path: "/login",
        element: <SignIn />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/logout",
        element: <Logout />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(

        <QueryClientProvider client={queryClient}>
            <React.StrictMode>
                <UserProvider>
                    <RouterProvider router={router} />
                </UserProvider>
            </React.StrictMode>
            <ReactQueryDevtools />
        </QueryClientProvider>

);