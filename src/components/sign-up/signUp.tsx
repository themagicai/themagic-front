import React from "react";
import "./styles.scss";
import { Typography, Button, TextField, Box } from "@mui/material";

export const SignUp = () => {
    return (
        <div className="sign-up">
            <Box component="form" noValidate autoComplete="off" className="Box">
                <Typography variant="h4" className="Typography1">
                    Try now for <span>FREE</span>
                </Typography>
                <TextField className="TextField" label="Name" type="text" />
                <TextField className="TextField" label="Email" type="text" />
                <TextField
                    className="TextField"
                    label="Create password"
                    type="text"
                />
                <TextField
                    className="TextField"
                    label="Confirm password"
                    type="text"
                />
                <Button variant="contained" color="primary" className="Button">
                    Try now
                </Button>
            </Box>
        </div>
    );
};
