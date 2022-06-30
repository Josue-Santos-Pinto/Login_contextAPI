import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../contexts/Context"

export const ShowData = () => {

    const {state, dispatch} = useContext(Context)
    return (
        <div>
            <h3>Info de Cadastro</h3>
        {state.user.name && 
          <>
                Nome: {state.user.name} <br />
                Sobrenome: {state.user.surName} <br />
                Telefone: {state.user.tel} <br />
                Email: {state.user.email} <br />
          </>
        }
        {!state.user.name && 'Falha ao Carregar os Dados'} <br />


            <Link to={'/'}> Voltar para Cadastro</Link>
        </div>
    )
}