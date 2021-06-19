function CaixaFilho(props) {
    const texto = props.children
    const textoTransformado = texto.toUpperCase()
    return(
    <h2>{textoTransformado}</h2>
    )
}
export default CaixaFilho