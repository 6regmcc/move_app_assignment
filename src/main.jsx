import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "/src/routes/root.jsx"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import DiscoverPage from "./routes/discover";
import {loader as discoverLoader} from "./routes/discover.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/discover",
        element: <DiscoverPage />,
        loader: discoverLoader
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);