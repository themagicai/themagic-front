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
import { Box } from "@mui/material";

export const HomePage = () => {
    return (
        <Box className="home">
            <Header />
            <Box className="background-image">
                <Banner />
                <VideoConcept />
                <Cards />
                <SignUp />
            </Box>
            <Footer />
        </Box>
    );
};
