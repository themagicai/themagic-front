import React, { useState } from "react";
import "./styles.scss";
import {
    Box,
    Button,
    Typography,
    Modal,
    FormControl,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #660080",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
};

export const Login = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => event.preventDefault();

    return (
        <Box className="login">
            <Button
                className="Button1"
                // variant="contained"
                onClick={handleOpen}
            >
                <Link to="" className="Link">
                    Log in
                </Link>
            </Button>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                className="Modal"
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="Box">
                    <Typography
                        className="Typography"
                        id="modal-modal-title"
                        variant="h5"
                        component="h1"
                    >
                        Login
                    </Typography>
                    <FormControl className="FormControl">
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
                    <FormControl className="FormControl">
                        <OutlinedInput
                            className="TextField"
                            type={showPassword ? "text" : "password"}
                            color="secondary"
                            placeholder="Create password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                    <Box className="Buttons">
                        <Button variant="contained">
                            Cancel
                        </Button>
                        <Button variant="contained">
                            Ok
                        </Button>
                    </Box>
                    {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                    </Typography> */}
                </Box>
            </Modal>
        </Box>
    );
};
