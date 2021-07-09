
export default function listReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload.value];

        case 'DELETE_ITEM':
            return state.filter(item => item !== action.payload)

        default:
            return state;
    }
}

