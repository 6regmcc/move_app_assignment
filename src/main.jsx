import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "/src/routes/root.jsx"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import DiscoverPage from "./routes/discover";
import {loader as discoverLoader} from "./routes/discover.jsx"
import TemporaryDrawer from "./routes/testpage.jsx";
import {sampleMovie} from "./sampleData.js";
import App from "./App.jsx"
import DetailsPage from "./routes/detailsPage.jsx"
import sampleDetails from "./sampleMovieDetails.js"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/discover",
                element: <DiscoverPage />,
                loader: discoverLoader
            }
        ]
    },
    {
        path: "/testpage",
        element: <TemporaryDrawer />
    },
    {
        path: "detailspage",
        element: <DetailsPage movie={sampleDetails}/>

    }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);