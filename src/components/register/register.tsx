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
import { Link } from "react-router-dom";

export const Register = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password1, setPassword1] = useState<string>("");
    // const [password2, setPassword2] = useState<string>("");

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    };

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Box className="register" id="#register">
            <Box component="form" noValidate autoComplete="off" className="Box">
                <Typography variant="h4" className="Typography1">
                    Try now for <span>FREE!</span>
                </Typography>
                <FormControl>
                    <OutlinedInput
                        className="TextField"
                        type="text"
                        color="secondary"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <OutlinedInput
                        className="TextField"
                        type="text"
                        color="secondary"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <OutlinedInput
                        className="TextField"
                        type="Email"
                        color="secondary"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <OutlinedInput
                        className="TextField"
                        type={showPassword ? "text" : "password"}
                        color="secondary"
                        placeholder="Create password"
                        value={password1}
                        onChange={(e) => setPassword1(e.target.value)}
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
                        value={password1}
                        onChange={(e) => setPassword1(e.target.value)}
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
                <Button
                    className="Button"
                    variant="contained"
                    color="primary"
                    // type="submit"
                >
                    <Link to="" className="Link">
                        Try now
                    </Link>
                </Button>
            </Box>
        </Box>
    );
};
