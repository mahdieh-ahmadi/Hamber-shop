import * as actions from './actions'
import axios from '../../hoc/axios/axios'

export const addHanler = (name) => {
    return{
        type:actions.ADD_HANDLER,
        name : name
    }
}

export const removeHanler = (name) => {
    return{
        type:actions.REMOVE_HANDLER,
        name : name
    }
}

export const setIngredients = ( ingredients ) => {
    return {
        type: actions.initialberger_done,
        ingredient: ingredients
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actions.initialberger_fail
    };
};

export const initIngredients = () => {
    return dispatch => {
        axios.get( '/startberger.json' )
            .then( response => {
               dispatch(setIngredients(response.data));
            } )
            .catch( () => {
                dispatch(fetchIngredientsFailed());
            } );
    };
};