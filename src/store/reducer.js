import { Accordion } from '@material-ui/core'
import { getlist } from './actionCreator'
import {INIT, INPUT_CHANGE, SELECT_CHANGE, SUBMIT} from './actionTypes'

const initialstate = {
    carlists: [],
    showlist:[],
    option:"color",
    condition: ""
}

const reducer = (state = initialstate, action) => {
    // const newState = JSON.parse(JSON.stringify(state));
    const newState = { ...state }

    if(action.type === INIT){
        newState.carlists = action.getlist
        newState.showlist = action.getlist
    }


    if(action.type === INPUT_CHANGE){
        newState.condition = action.value
    }

    if(action.type === SELECT_CHANGE){
        newState.option = action.value
    }
    console.log(newState.option)
    if(action.type === SUBMIT){
        const newcarlist = []
        if(newState.option === "make"){
            newState.carlists.map(item =>{
                if(item.make.includes( newState.condition)){
                    newcarlist.push(item)
                }
            })
        }
        if(newState.option === "color"){
            newState.carlists.map(item =>{
                if(item.color.includes( newState.condition)){
                    newcarlist.push(item)
                }
            })
        }
        newState.showlist = newcarlist
    }

    return newState
}

export default reducer