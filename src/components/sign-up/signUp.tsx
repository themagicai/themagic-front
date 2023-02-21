import { MouseEvent, useState } from "react";
import "./styles.scss";
import {
    Button,
    Box,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    InputAdornment,
    IconButton,
    OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    };

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className="sign-up">
            <Box component="form" noValidate autoComplete="off" className="Box">
                <Typography variant="h4" className="Typography1">
                    Try now for <span>FREE</span>
                </Typography>
                <TextField className="TextField" label="Name" type="text" />
                <TextField className="TextField" label="Email" type="email" />
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
