import React from "react";
import "./styles.scss";
import {
    Header,
    Banner,
    VideoConcept,
    Cards,
    SignUp,
    Footer,
} from "../../components";

export const HomePage = () => {
    return (
        <div className="home">
            <Header />
            <Banner />
            <VideoConcept />
            <Cards />
            <SignUp />
            <Footer />
        </div>
    );
};
