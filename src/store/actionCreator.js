import axios from 'axios'
import {INIT, INPUT_CHANGE, SELECT_CHANGE, SUBMIT} from './actionTypes'
export const init = getlist =>({
    type: INIT,
    getlist
})

export const getlist = () =>{
    // const getlist = []
    return dispatch =>{
        axios("/data.json")
        .then((response) => {
            const getlist = response.data
            const action = init(getlist)
            dispatch(action)
        })
    }
}

export const inputchange = (value) =>({
    type: INPUT_CHANGE,
    value
})

export const selectchange = (value) =>({
    type: SELECT_CHANGE,
    value
})

export const submit = () =>({
    type:SUBMIT
})