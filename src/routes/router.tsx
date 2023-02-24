import { createBrowserRouter, Link } from "react-router-dom";
import { HomePage, CVPage } from "../pages";

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
    {
        path: "cv",
        element: <CVPage />,
    },
]);
