import React from 'react';
import { Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { useLogoutUsersMutation } from '../../redux/index.endpoints';

export const Logout = () => {
    const navigate = useNavigate();
    const [logoutUsers, { data: authLogout, isLoading, isSuccess, isError }] =
        useLogoutUsersMutation();

    const logoutBtn: React.MouseEventHandler = () => navigate('/');

    return (
        <Box>
            <Button variant="contained" onClick={logoutBtn}>
                Logout
            </Button>
        </Box>
    );
};
