import * as actionsType from '../actions/actions'

const initialState = {
    order : [],
    process :false
}

const orderReducer = (state = initialState , action) => {
    switch (action.type) {
        case actionsType.load_done:
            const orders = []
            for(let p in action.order.data){
                orders.push(action.order.data[p])
            }
                return { ...state,
                   order : orders,
                   process:false
                };
        case actionsType.load_start:
                return{
                    ...state,
                    order : [],
                    process:true
                }
        case actionsType.load_faild:
            return{
                ...state,
                process:false
            }
        default:
            return state
    }
}

export default orderReducer