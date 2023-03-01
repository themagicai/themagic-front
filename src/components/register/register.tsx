import React, { useState } from 'react';
import './styles.scss';
import {
  Button,
  Box,
  Typography,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Alert,
  CircularProgress,
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useRegisterUsersMutation } from '../../redux/index.endpoints';
import { useForm } from 'react-hook-form';

export const Register = () => {
  const [showPassword1, setShowPassword1] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);
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
  ] = useRegisterUsersMutation();

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => event.preventDefault();

  const SubmitFormHandler = (value: any) => {
    registerUsers(value);
  };

  if (isError) return <Alert severity="error">isError RTK Error!</Alert>;

  if (isLoading) return <CircularProgress disableShrink />;

  // console.log(data);

  return (
    <Box className="register" id="#register">
      <Box
        className="Box"
        component="form"
        noValidate
        autoComplete="off"
        // onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
        onSubmit={handleSubmit(SubmitFormHandler)}
      >
        <Typography variant="h4" className="Typography1">
          Try now for <span>FREE!</span>
        </Typography>
        <OutlinedInput
          color="secondary"
          placeholder="Name"
          className="TextField"
          type="text"
          autoComplete="name"
          {...register('name', {
            pattern: /^[A-Za-z]+$/i,
            required: true,
            // minLength: 3,
            // maxLength: 25,
          })}
        />
        <OutlinedInput
          color="secondary"
          placeholder="Email"
          className="TextField"
          type="email"
          autoComplete="email"
          {...register('email', {
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            required: true,
            // minLength: 3,
            // maxLength: 25,
          })}
        />
        <OutlinedInput
          color="secondary"
          placeholder="Create password"
          className="TextField"
          type={showPassword1 ? 'text' : 'password'}
          autoComplete="confirmPassword"
          {...register('password1', {
            required: true,
            // minLength: 3,
            // maxLength: 20,
          })}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword1}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword1 ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <OutlinedInput
          color="secondary"
          placeholder="confirm password"
          className="TextField"
          type={showPassword2 ? 'text' : 'password'}
          autoComplete="ConfirmPassword"
          // {...register("password2", {
          //     required: true,
          //     // minLength: 3,
          //     // maxLength: 20,
          // })}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword2}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword2 ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="Button"
        >
          {/* <Link to="" className="Link"> */}
          Try now
          {/* </Link> */}
        </Button>
      </Box>
    </Box>
  );
};
