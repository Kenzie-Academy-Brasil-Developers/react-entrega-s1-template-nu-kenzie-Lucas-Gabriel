import { useState } from "react"
import { Input } from "../Form/Input";
import { Select } from "../Form/Select";
import { v4 as uuidv4 } from 'uuid';


import 'react-toastify/dist/ReactToastify.css';
export function Form({addNote}){
    const[description, setDescription] = useState("");
    const[value, setValue] = useState("");
    const[type, setType] = useState("income");

    const submit = (event)=>{
        event.preventDefault();
        description === "" || value === "" ? 
        alert("Insira valores válidos") : 
        addNote({description, value, type, id: uuidv4()});
        setDescription("");
        setValue("");
        setType("income");
    }

    
    return(
        <form onSubmit={submit} className="container form">
            <Input 
                type="text" 
                label="Descrição" 
                id="description" 
                value={description} 
                setValue={setDescription}
                placeholder="Insira sua descrição"
            />
            <Input
                type="number"
                label="Valor (R$)"
                id="value"
                value={value}
                setValue={setValue}
                placeholder="Insira um valor"
            />
            <Select
                name="type"
                id="type"
                label="Tipo de valor"
                value={type}
                setValue={setType}
            >
                <option value="income">Entrada</option>
                <option value="expense">Saída</option>

            </Select>
            <button type="submit">Inserir Valor</button>
        </form>
    )
}