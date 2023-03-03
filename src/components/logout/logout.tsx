import React from 'react';
import { Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

export const Logout = () => {
    const navigate = useNavigate();
    
    const logoutBtn: React.MouseEventHandler = () => navigate('/');

    return (
        <Box>
            <Button variant="contained" onClick={logoutBtn}>
                cancel
            </Button>
        </Box>
    );
};
