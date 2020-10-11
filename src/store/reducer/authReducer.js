import * as actions from '../actions/actions'

const initialstate = {
    proces : false,
    err : false,
    select : false,
    email : null,
    expiresIn : null,
    idtoken : null,
    localID : null
}

const Auth =(state = initialstate , action) => {
    switch (action.type) {
        case actions.Auth_start:
           return{
            ...state,
            proces:true,
            err : false ,
            email : null,
            expiresIn : null,
            idtoken : null,
            localID : null
           }
        case actions.Auth_fail:
            return{
                ...state,
                proces : false,
                err : true,
                email : null,
                expiresIn : null,
                idtoken : null,
                localID : null
            }
        case actions.Auth_succes:
            return{
                ...state,
                proces : false,
                err : false,
                email : action.email,
                expiresIn : action.expiresIn,
                idtoken : action.idtoken,
                localID : action.localID
            }
        case actions.Change_action:
            console.log(state.select)
            return{
                ...state,
                select : !state.select,
                email : null,
                expiresIn : null,
                idtoken : null,
                localID : null
            }
        case actions.Logout:
            return{
                ...state,
                proces : false,
                err : false,
                select : false,
                email : null,
                expiresIn : null,
                idtoken : null,
                localID : null
            }
        default:
            return state;
    }
}

export default Auth