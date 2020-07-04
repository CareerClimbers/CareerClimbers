import * as TYPES from './types'


export const loadCourses = ({query, page = 1, limit = 6}) => dispatch => {
    var endpoint = `/api/courses?q=${query}&page=${page}&limit=${limit}`
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