const initialState = {
    costumers: []
}

const ADD_COSTUMERS = 'ADD_COSTUMERS'
const ADD_MANY_COSTUMER = 'ADD_MANY_COSTUMER'
const REMOVE_COSTUMERS = 'REMOVE_COSTUMERS'

export const costumerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MANY_COSTUMER: 
            return {...state, costumers: [...state.costumers, ...action.payload]}
        case ADD_COSTUMERS:
            return { ...state, costumers: [...state.costumers, action.payload] }
        case REMOVE_COSTUMERS:
            return { ...state, costumers: state.costumers.filter(costumer => costumer.id !== action.payload) }

        default:
            return state
    }
}

export const addCostumerAction = payload => ({ type: ADD_COSTUMERS, payload })
export const addManyCostumersAction = payload => ({ type: ADD_MANY_COSTUMER, payload })
export const removeCostumerAction = payload => ({type: REMOVE_COSTUMERS, payload})