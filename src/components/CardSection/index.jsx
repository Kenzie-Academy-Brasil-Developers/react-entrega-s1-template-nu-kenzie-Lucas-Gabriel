import { useContext } from "react"
import { ThemeContext } from "../../providers/ThemeContext"
import { CardList } from "./CardList"
export function CardSection({noteList, removeNote}){
    const{isDark} = useContext(ThemeContext);
    return(
        <section className="container section cardSection">
            <h3
            className={isDark ? "title3 textWhite" : "title3 grey4"}
            >
                Resumo financeiro
            </h3>
            <CardList noteList = {noteList} removeNote={removeNote}/>
        </section>
    )
}