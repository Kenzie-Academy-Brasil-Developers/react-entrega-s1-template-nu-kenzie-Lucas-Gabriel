import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({children}) => {

    const[isDark, setIsDark] = useState(false);

    const changeMode = () => {
        setIsDark(!isDark)
    };

    return(
        <ThemeContext.Provider
        value={{
            isDark,
            setIsDark,
            changeMode
        }}
        >
            {children}
        </ThemeContext.Provider>
    )
}