import React from "react";
import "./styles.scss";
import { Header, Banner, VideoConcept, Cards, SignUp, Footer } from "../../components";

export const LoginPage = () => {
    return (
        <div className="login">
            <Header />
            <Banner />
            <VideoConcept />
            <Cards />
            <SignUp />
            <Footer />
        </div>
    );
};
