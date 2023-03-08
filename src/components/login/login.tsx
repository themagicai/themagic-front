import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import {
    Box,
    Button,
    Typography,
    Modal,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useLoginAuthMutation } from '../../redux/index.endpoints';
import styles from './styles.module.scss';

const modalFormStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #660080',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
};

const modalInputsStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const BoxButtonsStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const modalButtonsStyle: React.CSSProperties = {
    backgroundColor: '#333',
    borderRadius: '5px',
    textTransform: 'none',
};

export const Login = () => {
    const token = Cookies.get('token');
    const [open, setOpen] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { register, handleSubmit } = useForm();
    const [loginUsers, { isLoading, isSuccess, isError }] =
        useLoginAuthMutation();
    const navigate = useNavigate();

    const handleOpen: React.MouseEventHandler<HTMLElement> = () =>
        setOpen(true);

    const handleClose: React.MouseEventHandler<HTMLElement> = () =>
        setOpen(false);

    const handleClickShowPassword: React.MouseEventHandler<HTMLElement> = () =>
        setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => event.preventDefault();

    const formSubmit = (values: any) => {
        loginUsers(values);
    };

    if (isSuccess) navigate('cv');

    // useEffect(() => {
    //     if (isLogin) {
    //         Cookies.set('token', isLogin.email, {
    //             expires: 7,
    //         });
    //     }
    // }, [isSuccess]);

    useEffect(() => {
        if (!token) navigate('/');
    }, [token]);

    // if (isError) return <Alert severity="error">isError RTK Error!</Alert>;

    // if (isLoading) return <CircularProgress disableShrink />;

    return (
        <Box className={styles.login}>
            <Button className={styles.Button} onClick={handleOpen}>
                Log in
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={modalFormStyle}
                    component="form"
                    noValidate
                    onSubmit={handleSubmit(formSubmit)}
                >
                    <Typography fontWeight={800} variant="h5" component="h1">
                        Login
                    </Typography>
                    <br />
                    <OutlinedInput
                        sx={modalInputsStyle}
                        color="secondary"
                        type="email"
                        autoComplete=""
                        placeholder="Email"
                        {...register('email', {
                            pattern:
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            required: true,
                        })}
                    />
                    <br />
                    <OutlinedInput
                        sx={modalInputsStyle}
                        color="secondary"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete=""
                        placeholder="Create password"
                        {...register('password1', {
                            required: true,
                            minLength: 3,
                            maxLength: 20,
                        })}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <br />
                    <Box sx={BoxButtonsStyle}>
                        <Button
                            sx={modalButtonsStyle}
                            variant="contained"
                            onClick={handleClose}
                            color="primary"
                        >
                            Cancel
                        </Button>
                        <Button
                            sx={modalButtonsStyle}
                            variant="contained"
                            type="submit"
                            color="primary"
                        >
                            Ok
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};
