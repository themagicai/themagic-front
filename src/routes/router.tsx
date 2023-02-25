import { createBrowserRouter, Link } from "react-router-dom";
import { HomePage, CVPage, ErrorPage } from "../pages";
import { SignIn, SignUp } from "../components";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children: [
            {
                path: 'auth',
                children: [
                    {
                        path: 'sign-in',
                        element: <SignIn />
                    },
                    {
                        path: 'sign-up',
                        element: <SignUp />
                    },
                ],
            }
        ]
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
