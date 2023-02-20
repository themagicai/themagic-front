import React from "react";
import "./styles.scss";
import { Typography, Link } from "@mui/material";

export const Footer = () => {
    return (
        <footer className="footer">
            <Typography variant="h6">
                For partnership inquiries, please reach us at
            </Typography>
            <Link className="email">ulugbek@themagicai.com</Link>
        </footer>
    );
};
