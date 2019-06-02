
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            // Add new user to array
            return [...state, action.payload];
        default: 
            return state;
    }
}