import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Menu, MenuItem, Fade, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Login, Logout } from "../";
import styles from "./styles.module.scss";

export const Header = () => {
    const [btnSign, setBtnSign] = useState<null | HTMLElement>(null);
    const btnLogout = Boolean(btnSign);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const toRegister: React.MouseEventHandler<HTMLElement> = () => {
        const target: any = document.getElementById("#register");
        target.scrollIntoView({ behavior: "smooth" });
        navigate("#register");
    };

    if (pathname === "/cv") btnLogout;

    return (
        <header className={styles.header}>
            <Box className={styles.navLeft}>
                <Typography className={styles.Typography} variant="h4">
                    THE MAGIC AI
                </Typography>
            </Box>
            <Box className={styles.navRight}>
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                            <Button
                                variant="outlined"
                                color="secondary"
                                {...bindTrigger(popupState)}
                                className={styles.MenuButtonIcon}
                            >
                                <MenuIcon className={styles.MenuIcon} />
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={popupState.close}>
                                    Login
                                </MenuItem>
                                <MenuItem onClick={popupState.close}>
                                    Sign Up
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
                {btnSign ? null : <Login />}
                {btnSign ? (
                    <Logout />
                ) : (
                    <Button
                        variant="contained"
                        className={styles.Button2}
                        onClick={toRegister}
                    >
                        Sign Up
                    </Button>
                )}
            </Box>
        </header>
    );
};
