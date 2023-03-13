import React, { useState } from 'react';
import {
    Box,
    Typography,
    OutlinedInput,
    InputAdornment,
    Button,
    IconButton,
    CircularProgress,
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRegisterAuthMutation } from '../../redux/index.endpoints';
import Cookies from 'js-cookie';
import styles from './styles.module.scss';

export const Register = () => {
    const [showPassword1, setShowPassword1] = useState<boolean>(false);
    const [showPassword2, setShowPassword2] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const { register, handleSubmit } = useForm();
    const [registerAuth, { isLoading, isSuccess, isError }] =
        useRegisterAuthMutation();
    const token = Cookies.get('access');
    const navigate = useNavigate();

    const btnLoading: React.MouseEventHandler<HTMLElement> = () =>
        setLoading(true);

    const handleClickShowPassword1: React.MouseEventHandler = () =>
        setShowPassword1((show) => !show);

    const handleClickShowPassword2: React.MouseEventHandler = () =>
        setShowPassword2((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => event.preventDefault();

    const formSubmit = (values: any) => {
        registerAuth(values);
        console.log(values);
    };

    if (isSuccess) navigate('/cv');

    return (
        <Box className={styles.register} id="#register">
            <Box
                component="form"
                noValidate
                autoComplete="off"
                className={styles.Box}
                onSubmit={handleSubmit(formSubmit)}
            >
                <Typography variant="h4" className={styles.Typography}>
                    Try now for <span>FREE!</span>
                </Typography>
                <OutlinedInput
                    color="secondary"
                    placeholder="Name"
                    type="text"
                    autoComplete=""
                    className={styles.TextField}
                    {...register('name', {
                        pattern: /^[A-Za-z]+$/i,
                        required: true,
                        minLength: 3,
                        maxLength: 25,
                    })}
                />
                <OutlinedInput
                    color="secondary"
                    placeholder="Email"
                    type="email"
                    autoComplete=""
                    className={styles.TextField}
                    {...register('email', {
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        required: true,
                        minLength: 3,
                        maxLength: 25,
                    })}
                />
                <OutlinedInput
                    color="secondary"
                    placeholder="Create password"
                    type={showPassword1 ? 'text' : 'password'}
                    autoComplete="confirmPassword"
                    className={styles.TextField}
                    {...register('password', {
                        required: true,
                        minLength: 3,
                        maxLength: 20,
                    })}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleClickShowPassword1}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword1 ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <OutlinedInput
                    color="secondary"
                    placeholder="Confirm password"
                    type={showPassword2 ? 'text' : 'password'}
                    autoComplete="ConfirmPassword"
                    className={styles.TextField}
                    // {...register('password', {
                    //     required: true,
                    //     minLength: 3,
                    //     maxLength: 20,
                    // })}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleClickShowPassword2}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword2 ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={styles.Button}
                    onClick={btnLoading}
                >
                    Try now
                    {loading ? (
                        <CircularProgress
                            size={18}
                            color="inherit"
                            sx={{ ml: '8px' }}
                        />
                    ) : null}
                </Button>
            </Box>
        </Box>
    );
};
