import CardPokemon from '../CardPokemon'
import './Cargo.css'

const Cargo = (props) => {
    const corSecundaria = {
        backgroundColor: props.corSecundaria
    }
    const corPrimaria = {
        borderColor: props.corPrimaria
    }

    return (
        (props.pokemons.length > 0) && 
        <section className='cargo' style={corSecundaria}>
            <h3 style={corPrimaria}>{props.nome}</h3>
            <div className='pokemons'>
                {props.pokemons.map(pokemon => <CardPokemon corDeFundo={props.corPrimaria} key={pokemon.nome} nome={pokemon.nome} tipo={pokemon.tipo} imagem={pokemon.imagem} />)}
            </div>
        </section>
    )
}

export default Cargo