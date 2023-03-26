import { Box, useTheme } from '@mui/material';

type Props = {};

const DashboardPage = (props: Props) => {
  const { palette } = useTheme();
  return <Box color={palette.grey[300]}>Dashboard Page</Box>;
};

export default DashboardPage;
