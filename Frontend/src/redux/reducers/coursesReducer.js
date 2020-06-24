import * as TYPES from '../actions/types'


export default (state = {loading:true}, action) => {
    switch(action.type) {
        case TYPES.GET_COURSES:
            return { ...state, ...action.payload }
        case TYPES.SET_LOADING:
            return {...state, loading: true}
        case TYPES.REMOVE_LOADING:
            return {...state, loading: false}
        default: 
            return state;
    }
}