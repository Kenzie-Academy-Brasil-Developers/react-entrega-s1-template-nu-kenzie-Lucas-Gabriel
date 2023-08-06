export function CardList({noteList, removeNote}){
    return(
        
        <div>
            {noteList.length > 0 ? 
                <ul className="cardList">
                    {noteList.map((note)=>{
                        return(
                            <li key={note.id} className={note.type === "income" ? "card" : "card grey"}>
                                <div>
                                    <h3 className="title3 grey4">{note.description}</h3>
                                    <span className="text2 grey3">{note.type === "income" ? "Entrada":
                                        "Saída"
                                    }</span>
                                </div>
                                <div>
                                    <span className="text2 grey3">
                                       R$: {note.value}
                                    </span>
                                    <button className="deleteButton" onClick={()=>{removeNote(note.id)}}>
                                        Excluir
                                    </button>
                                </div>

                            </li>
                        )
                    })}
                </ul> : <h2 className="title2 grey4 colorChange">Você ainda não possui nenhum lançamento</h2>
            }
        </div>
    )
}