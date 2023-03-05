import { useState } from 'react';
import { Box, Button, Menu, MenuItem, Fade, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Login, Logout } from '../';
import styles from './styles.module.scss';

export const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [btn, setBtn] = useState<boolean>(false);

    const handleClick = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget);

    const handleClose: React.MouseEventHandler<HTMLLIElement> = () =>
        setAnchorEl(null);

    const toRegister = () => {
        const target: any = document.getElementById('#register');
        target.scrollIntoView({ behavior: 'smooth' });
        navigate('register#register');
    };

    if (pathname === 'cv') {
        setBtn(btn === true);
    }

    return (
        <header className={styles.header}>
            <Box className={styles.navLeft}>
                <Typography className={styles.Typography} variant="h4">
                    THE MAGIC AI
                </Typography>
            </Box>
            <Box className={styles.navRight}>
                <Button
                    className={styles.MenuButtonIcon}
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MenuIcon className={styles.MenuIcon} />
                </Button>
                <Menu
                    className={styles.Menu}
                    id="fade-menu"
                    MenuListProps={{ 'aria-labelledby': 'fade-button' }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem className={styles.MenuItem} onClick={handleClose}>
                        Log in
                    </MenuItem>
                    <MenuItem
                        className={styles.MenuItem}
                        // onClick={handleClose}
                        onClick={toRegister}
                    >
                        Sign Up
                    </MenuItem>
                </Menu>
                {btn ? null : <Login />}
                {btn ? (
                    <Logout />
                ) : (
                    <Button
                        className={styles.Button2}
                        variant="contained"
                        onClick={toRegister}
                    >
                        Sign Up
                    </Button>
                )}
            </Box>
        </header>
    );
};
