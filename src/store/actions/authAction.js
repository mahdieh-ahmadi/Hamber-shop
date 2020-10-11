import * as actionsType from './actions'
import axios from 'axios'

export const authSeccess = (data) => {
    return{
        type:actionsType.Auth_succes,
        email : data.email,
        expiresIn : data.expiresIn,
        idtoken : data.idToken,
        localID : data.localId
    }
};

export const authFailed = () => {
    return {
        type : actionsType.Auth_fail,
    }
};

export const authStart = () => {
    return{
        type:actionsType.Auth_start, 
    }
}

export const auth = (email,password,signup) => {
    return dispatch => {
        dispatch(authStart())
        let data = {
            email : email,
            password : password,
            returnSecureToken : true
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBjJBBU6O6HqXeouVs4ISD3tdtymYbEGXQ' 
        if(!signup){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBjJBBU6O6HqXeouVs4ISD3tdtymYbEGXQ' 
        }
        axios.post(url, data)
        .then( response => {
            dispatch(authSeccess(response.data))
        }
        ).catch(errore => {
            dispatch(authFailed())
        }
        )
    }
}

export const change = () => {
    return{
        type:actionsType.Change_action
    }
}

export const logout = () => {
    return{
        type:actionsType.Logout
    }
}


//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY] /sign in