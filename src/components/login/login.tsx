import React, { useState } from 'react';
import {
    Box,
    Button,
    Typography,
    Modal,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Alert,
    CircularProgress,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import { useLoginUsersMutation } from '../../redux/index.endpoints';
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

export const Login = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [data, setData] = useState<string>('');
    const navigate = useNavigate();
    const token = Cookies.get('token');
    const [
        registerUsers,
        { data: registerRTK, isLoading, isSuccess, isError, error },
    ] = useLoginUsersMutation();

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => event.preventDefault();

    const SubmitFormHandler = (value: any) => {
        registerUsers(value);
    };

    if (isError) return <Alert severity="error">isError RTK Error!</Alert>;

    if (isLoading) return <CircularProgress disableShrink />;

    return (
        <Box className={styles.login}>
            <Button className={styles.Button} onClick={handleOpen}>
                <Link to="" className={styles.Link}>
                    Log in
                </Link>
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={modalFormStyle}
                    component="form"
                    noValidate
                    onSubmit={handleSubmit(SubmitFormHandler)}
                >
                    <Typography variant="h5" component="h1">
                        Login
                    </Typography>
                    <OutlinedInput
                        color="secondary"
                        placeholder="Email"
                        type="email"
                        autoComplete="email"
                        {...register('email', {
                            pattern:
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            required: true,
                        })}
                    />
                    <OutlinedInput
                        color="secondary"
                        placeholder="Create password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="confirmPassword"
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
                    <Box>
                        <Button variant="contained" onClick={handleClose}>
                            cancel
                        </Button>
                        <Button variant="contained" type="submit">
                            <Link to="cv">ok</Link>
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};
