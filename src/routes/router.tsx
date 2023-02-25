import { createBrowserRouter, Link } from "react-router-dom";
import { HomePage, LoginPage, CVPage, ErrorPage } from "../pages";

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
        path: "login",
        element: <LoginPage />,
    },
    {
        path: "cv",
        element: <CVPage />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);
