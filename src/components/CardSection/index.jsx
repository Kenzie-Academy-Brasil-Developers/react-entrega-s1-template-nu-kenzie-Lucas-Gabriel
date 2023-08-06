import { CardList } from "./CardList"
export function CardSection({noteList, removeNote}){
    return(
        <section className="container section cardSection">
            <h3 className="title3 grey4 colorChange">Resumo financeiro</h3>
            <CardList noteList = {noteList} removeNote={removeNote}/>
        </section>
    )
}