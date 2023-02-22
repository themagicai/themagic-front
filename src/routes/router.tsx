import { createBrowserRouter, Link } from "react-router-dom";
import { HomePage } from "../pages";
import { SignUp } from "../components";

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
