import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "/src/routes/root.jsx"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import DiscoverPage from "./routes/discover";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/discover",
        element: <DiscoverPage />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);