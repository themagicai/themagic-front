import React from "react";
import "./styles.scss";
import { Header, Banner, VideoConcept, Cards, SignUp, Footer } from "../../components";

export const WelcomePage = () => {
    return (
        <div className="welcome">
            <Header />
            <Banner />
            <VideoConcept />
            <Cards />
            <SignUp />
            <Footer />
        </div>
    );
};
