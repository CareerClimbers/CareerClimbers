import * as TYPES from './types'


export const loadCourses = (url = 'http://localhost:5000/api/courses') => dispatch => {
    fetch(url)
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