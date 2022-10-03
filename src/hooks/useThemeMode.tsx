import { useEffect, useState } from 'react';

export const useThemeMode = () => {
    const [theme, setTheme] = useState('dark');

    const setMode = (mode: string) => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode);
    };
    const themeToggler = () => {
        if (theme === 'light') {
            window.localStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else {
            window.localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme) setTheme(localTheme);
    }, []);

    return { theme, themeToggler };
};
export default useThemeMode;
