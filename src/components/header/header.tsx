import { useState } from 'react';
import { Box, Button, Menu, MenuItem, Fade } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Login } from '../login';
import styles from './styles.module.scss';

export const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget);

    const handleClose: React.MouseEventHandler<HTMLLIElement> = () =>
        setAnchorEl(null);

    const toRegister = () => {
        const target: any = document.getElementById('#register');
        target.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={styles.header}>
            <Box className={styles.navLeft}>
                <h1>THE MAGIC AI</h1>
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
                        <Link to="login" className={styles.Link}>
                            Log in
                        </Link>
                    </MenuItem>
                    <MenuItem
                        className={styles.MenuItem}
                        // onClick={handleClose}
                    >
                        <Link
                            to="register#register"
                            className={styles.Link}
                            onClick={toRegister}
                        >
                            Sign Up
                        </Link>
                    </MenuItem>
                </Menu>
                <Login />
                <Button
                    className={styles.Button2}
                    variant="contained"
                    onClick={toRegister}
                >
                    <Link to="register#register" className={styles.Link}>
                        Sign Up
                    </Link>
                </Button>
            </Box>
        </header>
    );
};
