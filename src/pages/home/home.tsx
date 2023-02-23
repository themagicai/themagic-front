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
// import { CVPage } from "../";

export const HomePage = () => {
    return (
        <div className="home">
            <Header />
            <div className="background-image">
                <Banner />
                <VideoConcept />
                <Cards />
                <SignUp />
            </div>
            <Footer />
            {/* <CVPage /> */}
        </div>
    );
};
