export function Select({name, id, label, value, setValue, children}){
    return(
        <div>
            <label className="text2 grey4 colorChange" htmlFor={id}>{label}</label>
            <select name={name} id={id} value={value} onChange={(event)=>{setValue(event.target.value)}} className="text 2 grey3">
                {children}
            </select>
        </div>
    )
}