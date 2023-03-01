import React, { useState } from 'react';
import './styles.scss';
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
import { useRegisterUsersMutation } from '../../redux/index.endpoints';

const style = {
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
  ] = useRegisterUsersMutation();

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => event.preventDefault();

  if (isError) return <Alert severity="error">isError RTK Error!</Alert>;

  if (isLoading) return <CircularProgress disableShrink />;

  return (
    <Box className="login">
      <Button className="Button" onClick={handleOpen}>
        <Link to="" className="Link">
          Log in
        </Link>
      </Button>
      <Modal
        className="Modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="Box">
          <Typography
            className="Typography"
            id="modal-modal-title"
            variant="h5"
            component="h1"
          >
            Login
          </Typography>
          <OutlinedInput
            className="TextField"
            type="Email"
            color="secondary"
            placeholder="Email"
          />
          <OutlinedInput
            className="TextField"
            type={showPassword ? 'text' : 'password'}
            color="secondary"
            placeholder="Create password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Box className="Buttons">
            <Button
              className="Button1"
              variant="contained"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button className="Button2" variant="contained">
              {/* <Link to="" className='login-button'> */}
                Ok
              {/* </Link> */}
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
