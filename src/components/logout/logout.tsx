import React, { useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLogoutAuthMutation } from '../../redux/index.endpoints';
import Cookies from 'js-cookie';
import styles from './styles.module.scss';

export const Logout = () => {
    const token = Cookies.get('access');
    const navigate = useNavigate();
    const [logoutUsers, { isLoading, isSuccess, isError }] =
        useLogoutAuthMutation();

    const logoutBtn: React.MouseEventHandler<HTMLElement> = () => {
        Cookies.remove('token');
        navigate('/');
    };

    // useEffect(() => {
    //     if (!token) navigate('/');
    // }, [token]);

    return (
        <Box>
            <Button variant="contained" onClick={logoutBtn}>
                Logout
            </Button>
        </Box>
    );
};
