import React, { useState } from 'react';
import {
    Button,
    Box,
    Typography,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from '@mui/material';
import Cookies from 'js-cookie';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRegisterAuthMutation } from '../../redux/index.endpoints';
import styles from './styles.module.scss';

export const Register = () => {
    const token = Cookies.get('token');
    const [showPassword1, setShowPassword1] = useState<boolean>(false);
    const [showPassword2, setShowPassword2] = useState<boolean>(false);
    const { register, handleSubmit } = useForm();
    const [registerAuth, { isLoading, isSuccess, isError }] =
        useRegisterAuthMutation();
    const navigate = useNavigate();

    const handleClickShowPassword1: React.MouseEventHandler = () =>
        setShowPassword1((show) => !show);

    const handleClickShowPassword2: React.MouseEventHandler = () =>
        setShowPassword2((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => event.preventDefault();

    const SubmitFormHandler = (values: any) => {
        registerAuth(values);
        if (isSuccess) navigate('/cv');
    };

    // if (isError) return <Alert severity="error"> isError RTK Error! </Alert>;

    // if (isLoading) return <CircularProgress disableShrink />;

    return (
        <Box className={styles.register} id="#register">
            <Box
                component="form"
                noValidate
                autoComplete="off"
                className={styles.Box}
                onSubmit={handleSubmit(SubmitFormHandler)}
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
                        pattern:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
                    className={styles.Button}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Try now
                </Button>
            </Box>
        </Box>
    );
};
