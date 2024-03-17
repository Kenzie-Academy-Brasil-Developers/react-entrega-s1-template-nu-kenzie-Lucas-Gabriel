import {MdDarkMode, MdLightMode} from "react-icons/md"
import { FaWallet } from "react-icons/fa";
import style from "./style.module.scss"
import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeContext";

export function Header(){
    const {
        isDark,
        changeMode
    }
    = useContext(ThemeContext);
   const smallClassName = isDark ? style.light : style.dark;

    return(
        <header className={isDark === true ? "" : "light"}>
            <div className={style.logoDiv}>
                <FaWallet
                color={"#FD377E"}
                size={28}
                />
                <p className={style.title}>
                    say <small className={smallClassName}>my</small> money
                </p>
            </div>
            <button onClick={changeMode}>
                {
                    isDark ? <MdLightMode size={18} color="white"/>
                    : <MdDarkMode size={18} color="black"/>

                }
            </button>
        </header>
    )
}