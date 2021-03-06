import { reducerActionType } from "../types/reducerActionType"

export type UserType = {
    name: string,
    surName: string,
    tel: string,
    email: string,
    password: string
}
export const userInitialState: UserType = {
    name: '',
    surName:'',
    tel:'',
    email:'',
    password:''
}

export const userReducer = (state: UserType, action: reducerActionType) => {
    switch(action.type){
        case 'CHANGE_NAME':
            return{...state,name:action.payload.name}
        case 'CHANGE_SURNAME':
            return{...state,surName:action.payload.surName}
        case 'CHANGE_TEL':
            return{...state,tel:action.payload.tel}
        case 'CHANGE_EMAIL':
        return{...state,email:action.payload.email}
        case 'CHANGE_PASSWORD':
        return{...state,password:action.payload.password}
    }

    return state
}