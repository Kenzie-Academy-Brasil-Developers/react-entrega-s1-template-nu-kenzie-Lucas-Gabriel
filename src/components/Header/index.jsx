export function Header({logo, logoDark, darkState, icon, changeMode}){
    return(
        <header className={darkState === true ? "" : "light"}>
            <img src={darkState === true ? logoDark : logo} alt="logo"/>
            <button onClick={changeMode}>
                <img src={icon} alt="theme-icon"/>
            </button>
        </header>
    )
}