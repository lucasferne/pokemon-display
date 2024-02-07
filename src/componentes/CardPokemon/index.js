import './CardPokemon.css';

const CardPokemon = ({ nome, imagem, tipo, corDeFundo }) => {
    return (
        <button>
            <div className='pokemon'>
                <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                    <img src={imagem} alt={nome} />
                </div>
                <div className='rodape'>
                    <h4>{nome}</h4>
                    <h5>{tipo}</h5>
                </div>
            </div>
        </button>
    )
}

export default CardPokemon