export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
        return{
            ...state,
            transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }

        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transaction]
                // { id: Math.floor(Math.random() * 100), text: text, amount: amount },
            }
        default:
            return state;
    }
}