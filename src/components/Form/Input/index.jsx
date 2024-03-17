import { useContext } from "react"
import { ThemeContext } from "../../../providers/ThemeContext"

export function Input({type, label, id, value, setValue, min, placeholder}){

    const {isDark} = useContext(ThemeContext);

    return(
        <div>
            <label
            htmlFor={id}
            className={isDark? "text2 textWhite" : "text2 grey4"}
            >
                {label}
            </label>
            <input
            placeholder={placeholder}
            type={type}
            id={id}
            name={id}
            value={value}
            onChange={(event)=>{setValue(event.target.value)}}
            min={min}
            className="text1 grey3"/>
        </div>
    )
}