import { createBrowserRouter, Link } from "react-router-dom";
import { WelcomePage } from "../pages";
import { SignUp } from "../components";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <WelcomePage />
            </>
        ),
    },
    {
        path: "sign-up",
        element: <div>Login</div>,
    },
]);
