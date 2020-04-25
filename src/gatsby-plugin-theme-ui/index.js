import { rem } from "polished";

const space = [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
space.gutterL = 48;

const sizes = [0, 16, 24, 34, 42];
sizes.container = 1280;

const fontSizes = [12, 13, 14, 15, 18, 20, 24, 32, 54];

export const screenS = 550;
export const screenM = 780;
export const screenL = 1000;
export const screenXL = 1400;
export const breakpoints = { screenS, screenM, screenL, screenXL };

export default {
  colors: {
    text: `#2F313C`,
    background: `#FFFFFF`,
    primary: `#45D695`,
    primaryDark: `#2CC681`,
    primaryLight: `#EDFBF5`,
    primaryLightText: `#88A79A`,
    secondary: `#4A71D5`,
    secondaryDark: `#285CE0`,
    black: `#2F313C`,
    blackDark: `#1B1B1B`,
    blackLight: `#40424a`,
    grey: `#999999`,
    greyMid: `#DDDDDD`,
    greyLight: `#E5E5E5`,
    greyBg: `#EDEFF3`,
    greyLightest: `#FAFAFA`,
    white: `#FFFFFF`,
    red: `#D1495B`,
    redDark: `#C13144`,
    yellow: `#F2C85A`,
    yellowDark: `#E8B941`,
  },

  fonts: {
    body: `'euclid-flex', 'Helvetica Neue', sans-serif`,
    heading: `'euclid-flex', 'Helvetica Neue', sans-serif`,
  },

  fontSizes: fontSizes.map(size => {
    return rem(size, `16px`);
  }),

  fontWeights: {
    body: 400,
    heading: `bold`,
    light: 300,
    medium: 500,
    bold: `bold`,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },

  breakpoints: [
    `${screenS}px`,
    `${screenM}px`,
    `${screenL}px`,
    `${screenXL}px`,
  ],

  sizes,

  space,

  radii: [0, 5],

  shadows: [`none`, `0px 4px 6px 0px rgba(0, 0, 0, 0.15)`],

  // https://theme-ui.com/theming#body-styles
  styles: {
    root: {
      fontFamily: `body`,
      fontWeight: `body`,
    },
  },
};