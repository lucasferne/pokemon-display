import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Cargo from './componentes/Cargo';

function App() {

  const cargos = [
    {
      nome: 'Lead',
      corPrimaria: '#a757c2',
      corSecundaria: '#ebd9f7'
    },
    {
      nome: 'Sweeper',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Wall',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Tank',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Pivot',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Healer',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Trapper',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
    {
      nome: 'Phazer',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
  ]

  const [pokemons, setPokemon] = useState([])
  const aoNewPokemonAdicionado = (pokemon) => {
    setPokemon([...pokemons, pokemon])
  }

  return (
    <div className="App">
      <Form cargos={cargos.map(cargo => cargo.nome)} aoPokemonCadastrado={pokemon => aoNewPokemonAdicionado(pokemon)} />

      {cargos.map(cargo => <Cargo
        key={cargo.nome}
        nome={cargo.nome}
        corPrimaria={cargo.corPrimaria}
        corSecundaria={cargo.corSecundaria} 
        pokemons={pokemons.filter(pokemon => pokemon.cargo == cargo.nome)}
        />)}

    </div>
  );
}

export default App;
