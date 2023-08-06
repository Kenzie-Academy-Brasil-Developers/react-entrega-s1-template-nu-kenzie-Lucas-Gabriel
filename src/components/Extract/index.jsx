export function Extract({valueSum}){
    return(
        <div className="container">
            <div className="extract">
                <h3 className="title3 grey4 colorChange">Valor Total:</h3>
                <span className="title3 brand1"> R$: {valueSum}</span>
                <p className="text2 grey3">O valor se refere ao saldo.</p>
            </div>
        </div>
    )
}