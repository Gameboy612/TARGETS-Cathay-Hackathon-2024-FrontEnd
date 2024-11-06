/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';


export type ColorProp = {
  text: string;
  background: string;
  tint: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
  accent: string;
  accent_text: string;
  primary: string;
  secondary: string;
}

export type ColorTypeProp = keyof ColorProp;

export type ColorsProps = {
  light: ColorProp;
  dark: ColorProp;
}

export const Colors: ColorsProps = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    accent: '#ffae00',
    accent_text: '#fff',
    primary: "#6aafff", 
    secondary: "#90C3FF",
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    accent: '#bd7e09',
    accent_text: '#ffffff',
    primary: "#6aafff", 
    secondary: "#90C3FF",
  },
};
