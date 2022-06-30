import { createContext,useReducer } from "react";
import { userReducer,UserType,userInitialState } from '../reducers/userReducer';
import { reducerActionType } from "../types/reducerActionType";


type childrenType = {
    children: React.ReactNode
}
type initialStateType = {
    user: UserType
}

type ContextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any> 
}


const initialState = {
    user: userInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state:initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action)
})

export const ContextProvider = ({ children }: childrenType) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
    
}