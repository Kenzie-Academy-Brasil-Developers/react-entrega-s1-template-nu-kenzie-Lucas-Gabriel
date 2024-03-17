import { useContext } from "react"
import { ThemeContext } from "../../providers/ThemeContext"

export function Extract({valueSum}){
    const{isDark} = useContext(ThemeContext);
    return(
        <div className="container">
            <div className="extract">
                <h3
                className={isDark ? "title3 textWhite" : "title3 grey4"}
                >
                    Valor Total:
                </h3>
                <span className="title3 brand1">
                     R$: {valueSum}
                </span>
                <p className={isDark ? "text2 textWhite" : "text2 grey3"}>
                    O valor se refere ao saldo.
                </p>
            </div>
        </div>
    )
}