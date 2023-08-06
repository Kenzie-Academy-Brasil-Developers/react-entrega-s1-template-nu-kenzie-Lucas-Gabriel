export function Input({type, label, id, value, setValue, min, placeholder}){
    return(
        <div>
            <label htmlFor={id} className="text2 grey4 colorChange">{label}</label>
            <input placeholder={placeholder} type={type} id={id} name={id} value={value} onChange={(event)=>{setValue(event.target.value)}} min={min} className="text1 grey3" />
        </div>
    )
}