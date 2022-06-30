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
    }


    return (
        <div>
            
            <main className={styles.box}>
                
                <div className={styles.boxLeft}>

                </div>

                <div className={styles.boxRight}>
                    <h3>Cadastrar-se</h3>
                <form>
                    <label>Nome* </label>
                    <input type="text"
                     placeholder='Ex: João'
                     value={nameInput}
                     onChange={handleNameChange}
                     name="nome"/> <br />
                    <label>Sobrenome* </label>
                    <input type="text"
                     placeholder='Ex: Pedro'
                     value={surNameInput}
                     onChange={handleSurNameChange}
                     name=""/> <br />
                    <label>Telefone* </label>
                    <input type="tel" 
                    placeholder='Ex: (00) 0000-0000'
                    value={telInput}
                    onChange={handleTelChange}
                    name=""/> <br />
                    <label>E-mail* </label>
                    <input type="email"
                    placeholder='Ex: abcdef@gmail.com'
                    value={emailInput}
                    onChange={handleEmailChange}
                    name=""/> <br /> 
                    <button onClick={handleSignUp}> <Link to={'/exibir'}> Cadastrar-se </Link> </button>               
                </form>
                </div>
               
            </main>
          
            
        </div>
    )
}