import { useEffect, useState } from "react";
export const useThemeMode = () => {
 const [theme, setTheme] = useState("dark");

const setMode = (mode: string) => {
 window.localStorage.setItem("theme", mode);
 setTheme(mode);
 };
const themeToggler = () => (theme === "light" ? setMode("dark") : setMode("light"));
useEffect(() => {
 const localTheme = window.localStorage.getItem("theme");
 localTheme && setTheme(localTheme);
 }, []);

return { theme, themeToggler };
};
export default useThemeMode;