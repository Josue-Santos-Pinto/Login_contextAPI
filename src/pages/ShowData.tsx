import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../contexts/Context"
import styles from '../App.module.css'

export const ShowData = () => {

    const {state, dispatch} = useContext(Context)

    const handleSwitchTheme = () => {
        if(state.theme.status === 'light'){
            dispatch({
                type:'CHANGE_STATUS',
                payload:{
                    status:'dark'
                }
            })
        } else {
            dispatch({
                type:'CHANGE_STATUS',
                payload:{
                    status:'light'
                }
            }) 
        }
    }

    return (
        <div>
            <header>
                <div className={styles.logo}>

                </div>
                <div className={styles.Switch} style={{
                backgroundColor: state.theme.status === 'light' ? state.theme.lightColors.backgroundColor : state.theme.darkColors.backgroundColor,
                color: state.theme.status === 'light' ? state.theme.lightColors.color : state.theme.darkColors.color
                }}>
                <h3><span>Tema: [{state.theme.status}]</span></h3>
                <button onClick={handleSwitchTheme}>Switch Theme</button> <br />

                </div>
            </header>
         
        
            
            
        {/*
        {state.user.name && 
          <>
                Nome: {state.user.name} <br />
                Sobrenome: {state.user.surName} <br />
                Telefone: {state.user.tel} <br />
                Email: {state.user.email} <br />
                Senha: {state.user.password} <br />
          </>
        }
        {(!state.user.name && state.user.email) &&
         <>
            Email: {state.user.email} <br />
            Senha: {state.user.password} <br />
        </>

        }
        {!state.user.name && !state.user.email && 'Falha ao Carregar os Dados'} <br />


            <Link to={'/'}> Voltar para Cadastro</Link>
    */}
    </div>
    )
}