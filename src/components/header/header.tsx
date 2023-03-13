import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Box, Button, Menu, MenuItem, Fade, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Login, Logout } from '../';
import styles from './styles.module.scss';

export const Header = () => {
    const navigate = useNavigate();
    // const [btnSign, setBtnSign] = useState<null | HTMLElement>(null);
    // const logoutBtn = Boolean(btnSign);

    const toRegister: React.MouseEventHandler<HTMLElement> = () => {
        const target: any = document.getElementById('#register');
        target.scrollIntoView({ behavior: 'smooth' });
        navigate('#register');
    };

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
                                color='secondary'
                                {...bindTrigger(popupState)}
                                className={styles.MenuButtonIcon}
                            >
                                <MenuIcon className={styles.MenuIcon} />
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={popupState.close}>
                                    Sign In
                                </MenuItem>
                                <MenuItem onClick={popupState.close}>
                                    Sign Up
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
                <Login />
                <Button
                    className={styles.Button2}
                    variant="contained"
                    onClick={toRegister}
                >
                    Sign Up
                </Button>
            </Box>
        </header>
    );
};
