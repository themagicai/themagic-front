import React, { useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useLogoutUsersMutation } from '../../redux/index.endpoints';
import Cookies from 'js-cookie';
import styles from './styles.module.scss';

export const Logout = () => {
    const token = Cookies.get('token');
    const navigate = useNavigate();
    const [logoutUsers, { data: authLogout, isLoading, isSuccess, isError }] =
        useLogoutUsersMutation();

    const logoutBtn: React.MouseEventHandler = () => {
        Cookies.remove("token");
        navigate('/');
    };

    useEffect(() => {
        if (!token) navigate('/');
    }, [token]);

    return (
        <Box>
            <Button variant="contained" onClick={logoutBtn}>
                Logout
            </Button>
        </Box>
    );
};
