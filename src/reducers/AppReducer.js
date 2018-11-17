const initialState = {
    counter: 0
}

export default function AppReducer(state = initialState, action) {
    if (action.type === 'ADD_COUNTER') {
        return  {
            ...state,
            counter: ++state.counter
        };
    }

    return state;
}