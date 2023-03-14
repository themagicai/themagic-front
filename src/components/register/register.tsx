import React, { useState } from 'react';
import {
    Box,
    Typography,
    OutlinedInput,
    InputAdornment,
    Button,
    IconButton,
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRegisterAuthMutation } from '../../redux/index.endpoints';
import Cookies from 'js-cookie';
import styles from './styles.module.scss';

export const Register = () => {
    const [showPassword1, setShowPassword1] = useState<boolean>(false);
    const [showPassword2, setShowPassword2] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [registerAuth, { isLoading, isSuccess, isError }] =
        useRegisterAuthMutation();
    const token = Cookies.get('access');
    const navigate = useNavigate();

    const handleClickShowPassword1: React.MouseEventHandler = () =>
        setShowPassword1((show) => !show);

    const handleClickShowPassword2: React.MouseEventHandler = () =>
        setShowPassword2((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => event.preventDefault();

    const formSubmit = (values: any) => {
        try {
            registerAuth(values);
            console.log(values);
            toast.success(`Регистрация прошла успешна!`, {
                toastId: 'reg-toast-id',
            });
            navigate('/cv');
        } catch (e) {
            toast.error(`Ошибка при регистрации`, {toastId: 'reg-toast-id-error'})
        }
    };

    if (isError) console.log('isError rtk');

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
                        pattern:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        required: true,
                        minLength: 3,
                        maxLength: 25,
                    })}
                />
                {errors.email ? <p color="red">Невалидный email</p> : null}
                <OutlinedInput
                    color="secondary"
                    placeholder="Create password"
                    type={showPassword1 ? 'text' : 'password'}
                    autoComplete="confirmPassword"
                    className={styles.TextField}
                    {...register('password', {
                        required: true,
                        minLength: 5,
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
                {errors.password ? (
                    <p color="red">
                        Длина пароля должна быть не менее 5 символов
                    </p>
                ) : null}
                <OutlinedInput
                    color="secondary"
                    placeholder="Confirm password"
                    type={showPassword2 ? 'text' : 'password'}
                    autoComplete="ConfirmPassword"
                    className={styles.TextField}
                    // {...register('password', {
                    //     required: true,
                    //     minLength: 5,
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
                {errors.password ? (
                    <p color="red">
                        Длина пароля должна быть не менее 5 символов
                    </p>
                ) : null}
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={styles.Button}
                >
                    Try now
                </Button>
            </Box>
        </Box>
    );
};
