import {createStore} from "redux";

const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {
    if (action.type === "INC") {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === "RESET") {
        return {
            ...state,
            counter: 0,
        }
    }
    if (action.type === "INC100") {
        return {
            ...state,
            counter: state.counter + 100
        }
    }
    if (action.type === "DEC") {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === "DEC100") {
        return {
            ...state,
            counter: state.counter - 100
        }
    } else {
        return state
    }
}
const store = createStore(reducer)

export default store
