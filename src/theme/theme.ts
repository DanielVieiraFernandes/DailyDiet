import {color, createTheme} from '@shopify/restyle';
import {colors} from './colors';
import {sizes} from './sizes';
import {fontFamily} from './fontFamily';

const theme = createTheme({
  colors,
  sizes,
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    defaults: {
      fontFamily: fontFamily.REGULAR,
      fontSize: sizes.s,
    },
    HeaderTitle:{
      fontFamily: fontFamily.BOLD,
      fontSize: sizes.xl,
      color: 'GRAY_1'
    },
    TitlePercent: {
      fontFamily: fontFamily.BOLD,
      fontSize: sizes.xxxl,
    },
    SubtitlesPercent: {
      fontFamily: fontFamily.REGULAR,
      fontSize: sizes.m,
    },
    ButtonTitle: {
      fontFamily: fontFamily.BOLD,
      fontSize: sizes.m,
      color:'WHITE',
    },
    TitleMeals:{
      fontFamily: fontFamily.REGULAR,
      fontSize: sizes.l,
      color: 'GRAY_1'
    },
    HourMeals:{
      fontFamily: fontFamily.BOLD,
      fontSize: sizes.s,
      color: 'GRAY_1'
    },
    TitleStatistics:{
      fontFamily: fontFamily.BOLD,
      fontSize: sizes.m,
      color: 'GRAY_1',
    },
    TitleCard:{
      fontFamily: fontFamily.BOLD,
      fontSize: sizes.xxl,
      color: 'GRAY_1',
    },
    SubtitleCard:{
      fontFamily: fontFamily.REGULAR,
      fontSize: sizes.m,
      color: 'GRAY_2',
      textAlign: "center"
    }
  },
});

export default theme;

export type ThemeProps = typeof theme;
