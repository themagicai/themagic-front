import { useState, MouseEvent } from "react";
import "./styles.scss";
import { Button, Menu, MenuItem, Fade } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

export const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="header">
            <div className="nav-left">
                <h1>THE MAGIC AI</h1>
            </div>
            <div className="nav-right">
                <Button
                    className="MenuButtonIcon"
                    id="fade-button"
                    aria-controls={open ? "fade-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                >
                    <MenuIcon className="MenuIcon" />
                </Button>
                <Menu
                    className="Menu"
                    id="fade-menu"
                    MenuListProps={{ "aria-labelledby": "fade-button" }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleClose}>Login</MenuItem>
                    <MenuItem onClick={handleClose}>SignUp</MenuItem>
                </Menu>
                <Button className="Button1" variant="contained">
                    Log in
                </Button>
                <Button className="Button2" variant="contained">
                    Sign Up
                </Button>
            </div>
        </div>
    );
};
