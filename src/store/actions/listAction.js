
export const addItem = (value) => { return { type: 'ADD_ITEM', payload: value } }
export const removeItem = (value) => { return { type: 'DELETE_ITEM', payload: value } }