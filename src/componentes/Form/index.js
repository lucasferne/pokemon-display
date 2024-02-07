import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Form.css';

const Form = (props) => {

    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('')
    const [imagem, setImagem] = useState('')
    const [cargo, setCargo] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoPokemonCadastrado({
            nome,
            tipo,
            imagem,
            cargo
        })
        
        setNome('')
        setTipo('')
        setImagem('')
        setCargo('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do Pokemon para criar o card</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Pokemon"
                    placeholder="Digite o Pokémon"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true} 
                    label="Tipo" 
                    placeholder="Digite o tipo do Pokémon"
                    valor={tipo}
                    aoAlterado={valor => setTipo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Cargo" 
                    itens={props.cargos} 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Form
