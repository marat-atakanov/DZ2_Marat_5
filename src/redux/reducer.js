const initialState = {
    result: 0
}

export default function reducer(state = initialState, action) {

    if (action.type === "PLUS") {
        return {
            ...state,
            result: Number(action.payload.valueOne) + Number(action.payload.valueTwo)
        }
    } else if (action.type === "MINUS") {
        return {
            ...state,
            result: Number(action.payload.valueOne) - Number(action.payload.valueTwo)
        }
    } else if (action.type === "MULTIPLY") {
        return {
            ...state,
            result: Number(action.payload.valueOne) * Number(action.payload.valueTwo)
        }
    } else if (action.type === "DIVIDE") {
        return {
            ...state,
            result: Number(action.payload.valueOne) / Number(action.payload.valueTwo)
        }
    }

    return state;
}