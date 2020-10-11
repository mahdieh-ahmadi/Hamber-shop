import * as actions from './actions'
import axios from '../../hoc/axios/axios'

export const fetchStart = () => {
    return{
        type :actions.load_start
    }
}

export const setOrder = ( orders ) => {
    return {
        type: actions.load_done,
        order: orders
    };
};

export const fetchOrderFailed = () => {
    return {
        type: actions.load_faild
    };
};

export const initialOrder = (token , userId) => {
    return dispatch => {
        dispatch(fetchStart())
        const url = '?auth=' + token + '&orderBy="userid"&equalTo="' + userId + '"'
        axios.get( '/order.json' + url )
            .then( response => {
               dispatch(setOrder(response));
            } )
            .catch( () => {
                dispatch(fetchOrderFailed());
            } );
    };
};