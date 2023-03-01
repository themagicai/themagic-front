import React from 'react';
import { Box, LinearProgress } from '@mui/material';

export const LinearLoader = () => {
  return (
    <Box className="linear-loader" sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
};
