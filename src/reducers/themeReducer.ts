import { reducerActionType } from "../types/reducerActionType"

export type ThemeType = {
    status: 'dark' | 'light',
    lightColors:{
        backgroundColor: '#FFF',
        color:'#000'
    },
    darkColors:{
        backgroundColor: '#000',
        color:'#FFF'
    }
}
export const themeInitialState: ThemeType = {
    status: 'light',
    lightColors:{
        backgroundColor: '#FFF',
        color:'#000'
    },
    darkColors:{
        backgroundColor: '#000',
        color:'#FFF'
    }
}

export const themeReducer = (state: ThemeType, action: reducerActionType) => {
    switch(action.type){
       case 'CHANGE_STATUS':
        return{...state, status: action.payload.status}
    }

    return state
}