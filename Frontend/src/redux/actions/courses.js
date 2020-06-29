import * as TYPES from './types'


export const loadCourses = ({query}) => dispatch => {
    var endpoint = `/api/courses?q=${query}`
    fetch(endpoint)
    .then(res => res.json())
    .then(res => {
        dispatch({type: TYPES.SET_LOADING})
        dispatch({
            type: TYPES.GET_COURSES,
            payload: res
        })
        dispatch({type: TYPES.REMOVE_LOADING})
    })
    .catch(error => console.log(error))
}