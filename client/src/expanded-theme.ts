// eslint-disable-next-line
import { Palette, PaletteColor } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface PaletterColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}
