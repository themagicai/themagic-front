import { MouseEvent, useState } from "react";
import "./styles.scss";
import {
    Button,
    Box,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

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
                <FormControl>
                    <OutlinedInput
                        className="TextField"
                        type="text"
                        color="secondary"
                        placeholder="Name"
                        required
                    />
                </FormControl>
                <FormControl>
                    <OutlinedInput
                        className="TextField"
                        type="Email"
                        color="secondary"
                        placeholder="email"
                        required
                    />
                </FormControl>
                <FormControl>
                    <OutlinedInput
                        className="TextField"
                        type={showPassword ? "text" : "password"}
                        color="secondary"
                        placeholder="Create password"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl>
                    <OutlinedInput
                        className="TextField"
                        type={showPassword ? "text" : "password"}
                        color="secondary"
                        placeholder="Confirm password"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                {/* <TextField
                    className="TextField"
                    label="Name"
                    type="text"
                    required
                /> */}
                {/* <TextField
                    className="TextField"
                    label="Email"
                    type="email"
                    required
                /> */}
                {/* <TextField
                    className="TextField"
                    label="Create password"
                    type="text"
                    required
                /> */}
                {/* <TextField
                    className="TextField"
                    label="Confirm password"
                    type="text"
                    required
                /> */}

                <Button variant="contained" color="primary" className="Button">
                    Try now
                </Button>
            </Box>
        </div>
    );
};
