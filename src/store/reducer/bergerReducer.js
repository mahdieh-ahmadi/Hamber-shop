import * as actionsType from '../actions/actions'

const initialState = {
    ingredient:null,
    fee:400
}

const Fee = {
    bakon:200,
    salad:300,
    chees:500,
    meat:1000
}

const bergerReducer = (state = initialState , action) => {
    switch (action.type) {
        case actionsType.ADD_HANDLER:
            return{
                ...state,
                ingredient:{
                    ...state.ingredient,
                    [action.name] : state.ingredient[action.name] + 1
                },
                fee: state.fee + Fee[action.name]
            }
        case actionsType.REMOVE_HANDLER:
            return{
                ...state,
                ingredient:{
                    ...state.ingredient,
                    [action.name] : state.ingredient[action.name] - 1
                },
                fee: state.fee - Fee[action.name]
            }
        case actionsType.initialberger_done:
                return { ...state,
                    ingredient: {
                        salad: action.ingredient.salad,
                        bakon: action.ingredient.bakon,
                        chees: action.ingredient.chees,
                        meat: action.ingredient.meat
                    },
                    fee: 400,
                    error: false
                };
        default:
            return state
    }
}

export default bergerReducer