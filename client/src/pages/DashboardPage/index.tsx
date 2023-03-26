import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';

type Props = {};

const DashboardPage = (props: Props) => {
  const { palette } = useTheme();
  return <Box>Dashboard Page</Box>;
};

export default DashboardPage;
