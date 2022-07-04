import styles from '../App.module.css'
import { Link } from 'react-router-dom'
import React, { useContext,useState } from 'react'
import { Context } from '../contexts/Context'

export const SignUp = () => {

    const {state, dispatch} = useContext(Context)
    const [nameInput,setNameInput] = useState('')
    const [surNameInput,setSurNameInput] = useState('')
    const [telInput,setTelInput] = useState('')
    const [emailInput,setEmailInput] = useState('')
    const [passwordInput,setPasswordInput] = useState('')

    const handleNameChange = (e:React.ChangeEvent <HTMLInputElement>) => {
       setNameInput(e.target.value)
    }
    const handleSurNameChange = (e:React.ChangeEvent <HTMLInputElement>) => {
        setSurNameInput(e.target.value)
    }
    const handleTelChange = (e:React.ChangeEvent <HTMLInputElement>) => {
        setTelInput(e.target.value)
    }
    const handleEmailChange = (e:React.ChangeEvent <HTMLInputElement>) => {
        setEmailInput(e.target.value)
    }
    const handlePasswordChange = (e:React.ChangeEvent <HTMLInputElement>) => {
        setPasswordInput(e.target.value)
    }

    const handleSignUp = () => {
        dispatch({
            type:'CHANGE_NAME',
            payload:{
                name: nameInput
            }
        })
        dispatch({
            type:'CHANGE_SURNAME',
            payload:{
                surName: surNameInput
            }
        })
        dispatch({
            type:'CHANGE_TEL',
            payload:{
                tel: telInput
            }
        })
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            <span>reiciendis</span>
                        </h2>
                    </div>
                       
                    <div className={styles.img}>
                       
                    </div>
                </div>

                <div className={styles.boxRight}>
                    <h3>Cadastrar-se</h3>
                <form>
                    <label>Nome* </label>
                    <input type="text"
                     placeholder='Ex: João'
                     required
                     value={nameInput}
                     onChange={handleNameChange}
                     /> <br />
                    <label>Sobrenome* </label>
                    <input type="text"
                     placeholder='Ex: Pedro'
                     required
                     value={surNameInput}
                     onChange={handleSurNameChange}
                     /> <br />
                    <label>Telefone* </label>
                    <input type="tel" 
                    placeholder='Ex: (00) 0000-0000'
                    required
                    value={telInput}
                    onChange={handleTelChange}
                    /> <br />
                    <label>E-mail* </label>
                    <input type="email"
                    placeholder='Ex: abcdef@gmail.com'
                    required
                    value={emailInput}
                    onChange={handleEmailChange}
                    /> <br /> 
                    <label>Senha* </label>
                    <input type="password"
                     placeholder='Ex: 1234'
                     required
                     value={passwordInput}
                     onChange={handlePasswordChange}
                     /> <br />
                     <Link className={styles.btn} onClick={handleSignUp} to={'/exibir'}> Cadastrar-se </Link>                
                </form>
                    <p>Já tem uma conta ? <br />
                    <Link to={'/login'}>Clique Aqui</Link> para Logar</p>
    
                </div>
               
            </main>
          
            
        </div>
    )
}