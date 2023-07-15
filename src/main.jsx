import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "/src/routes/root.jsx"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import DiscoverPage from "./routes/discover";
import {loader as discoverLoader} from "./routes/discover.jsx"
import TemporaryDrawer from "./routes/testpage.jsx";

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
    }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);