import React from 'react';
import error404 from '../../assets/images/error.png';
import { Box } from '@mui/material';

const styles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const ErrorPage = () => {
  return (
    <Box className="error" style={styles}>
      <img width="48%" src={error404} style={styles} />
    </Box>
  );
};
