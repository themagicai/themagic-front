import { createBrowserRouter, Link } from "react-router-dom";
import { LoginPage } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <LoginPage />
                {/* <Link to="login">Login</Link> */}
            </>
        ),
    },
    {
        path: "login",
        element: <div>Login</div>,
    },
]);
