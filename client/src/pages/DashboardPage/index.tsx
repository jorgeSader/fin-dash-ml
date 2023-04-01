import { Box, useMediaQuery, useTheme } from '@mui/material';

type Props = {};

const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`;

const gridTemplateSmallScreens = `
"a"
"a"
"a"
"a"
"b"
"b"
"b"
"b"
"c"
"c"
"c"
"d"
"d"
"d"
"e"
"e"
"f"
"f"
"f"
"g"
"g"
"g"
"h"
"h"
"h"
"h"
"i"
"i"
"j"
"j"
`;
const DashboardPage = (props: Props) => {
  const isAboveMediumScreen = useMediaQuery('(min-width: 48rem)');
  const { palette } = useTheme();
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1rem"
      sx={
        isAboveMediumScreen
          ? {
              gridTemplateAreas: gridTemplateLargeScreens,
              gridTemplateColumns: 'repeat(3, minmax(370px, 1fr)',
              gridTemplateRows: 'repeat(10, minmax(60px, 1fr))',
            }
          : {
              gridTemplateAreas: gridTemplateSmallScreens,
              gridAutoColumns: '1fr',
              gridAutoRows: '5rem',
            }
      }
    >
      <Box bgcolor="#fff" gridArea="a"></Box>
      <Box bgcolor="#fff" gridArea="b"></Box>
      <Box bgcolor="#fff" gridArea="c"></Box>
      <Box bgcolor="#fff" gridArea="d"></Box>
      <Box bgcolor="#fff" gridArea="e"></Box>
      <Box bgcolor="#fff" gridArea="f"></Box>
      <Box bgcolor="#fff" gridArea="g"></Box>
      <Box bgcolor="#fff" gridArea="h"></Box>
      <Box bgcolor="#fff" gridArea="i"></Box>
      <Box bgcolor="#fff" gridArea="j"></Box>
    </Box>
  );
};

export default DashboardPage;
