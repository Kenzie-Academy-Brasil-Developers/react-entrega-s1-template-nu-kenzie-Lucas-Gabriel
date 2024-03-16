import {MdDarkMode, MdLightMode} from "react-icons/md"
import { FaWallet } from "react-icons/fa";
import style from "./style.module.scss"

export function Header({darkState, changeMode}){
   const smallClassName = darkState ? style.light : style.dark;

    return(
        <header className={darkState === true ? "" : "light"}>
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
                    darkState ? <MdLightMode size={18} color="white"/>
                    : <MdDarkMode size={18} color="black"/>

                }
            </button>
        </header>
    )
}