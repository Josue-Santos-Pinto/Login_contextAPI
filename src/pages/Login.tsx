import styles from '../App.module.css'
import { Link } from 'react-router-dom'
import React, { useContext,useState } from 'react'
import { Context } from '../contexts/Context'

export const Login = () => {

    const {state, dispatch} = useContext(Context)
    const [emailInput,setEmailInput] = useState('')
    const [passwordInput,setPasswordInput] = useState('')

   
    const handleEmailChange = (e:React.ChangeEvent <HTMLInputElement>) => {
        setEmailInput(e.target.value)
    }
    const handlePasswordChange = (e:React.ChangeEvent <HTMLInputElement>) => {
        setPasswordInput(e.target.value)
    }

    const handleLogin = () => {
       
        dispatch({
            type:'CHANGE_EMAIL',
            payload:{
                email: emailInput
            }
        })
        dispatch({
            type:'CHANGE_PASSWORD',
            payload:{
                password: passwordInput
            }
        })
    }


    return (
        <div>
            
            <main className={styles.box}>
                
                <div className={styles.boxLeft}>
                    <div className={styles.textBanner}>
                        <h2>
                            Saiba tudo sobre <span>Games</span> 
                            Promoções, Dicas e muito mais...
                        </h2>
                    </div>
                       
                    <div className={styles.img}>
                       
                    </div>
                </div>

                <div className={styles.boxRight}>
                    <h3>Cadastrar-se</h3>
                <form>
                    
                    <label>E-mail* </label>
                    <input type="email"
                    placeholder='Ex: abcdef@gmail.com'
                    value={emailInput}
                    onChange={handleEmailChange}
                    /> <br /> 
                    <label>Senha* </label>
                    <input type="password"
                     placeholder='Ex: 1234'
                     value={passwordInput}
                     onChange={handlePasswordChange}
                     /> <br />
                     <Link className={styles.btn} onClick={handleLogin} to={'/exibir'}> Login </Link>                
                </form>

                    <p>Não tem uma conta ? <br />
                    <Link to={'/'}>Clique Aqui</Link> para Cadastrar</p>
                </div>
               
            </main>
          
            
        </div>
    )
}