import { createBrowserRouter, Link } from "react-router-dom";
import { HomePage } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <HomePage />
            </>
        ),
    },
    {
        path: "sign-up",
        element: <div>Login</div>,
    },
]);
