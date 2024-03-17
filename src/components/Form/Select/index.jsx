import { useContext } from "react"
import { ThemeContext } from "../../../providers/ThemeContext"

export function Select({name, id, label, value, setValue, children}){

    const {isDark} = useContext(ThemeContext);

    return(
        <div>
            <label
            className={ isDark? "text2 textWhite" : "text2 grey4"}
            htmlFor={id}
            >
                {label}
            </label>
            <select
            name={name}
            id={id}
            value={value}
            onChange={(event)=>{setValue(event.target.value)}}
            className="text 2 grey3"
            >
                {children}
            </select>
        </div>
    )
}