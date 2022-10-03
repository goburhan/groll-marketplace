import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useThemeMode } from '../../hooks/useThemeMode';
import { light, dark } from '../../styles/themes';

type ThemeContextType = {
    children: React.ReactNode;
};

const ThemeContext: React.FC<ThemeContextType> = ({ children }) => {
    const { theme } = useThemeMode();
    console.log(theme);
    const themeMode = theme === 'dark' ? dark : light;
    return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
};
export default ThemeContext;
