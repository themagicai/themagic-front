import React from "react";
import {
    Header,
    Banner,
    VideoConcept,
    Cards,
    Register,
    Footer,
} from "../../components";
import { Box } from "@mui/material";
import styles from "./styles.module.scss";

export const HomePage = () => {
    return (
        <Box className={styles.home}>
            <Header />
            <Box className={styles.backgroundImage}>
                <Banner />
                <VideoConcept />
                <Cards />
                <Register />
            </Box>
            <Footer />
        </Box>
    );
};
