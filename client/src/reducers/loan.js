import * as actions from '../actions/loan';

const initialState = {
    loanList: [],
    filterList: [],
    key: "",
    loading: false,
    error: null
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                error: null
            });

        case actions.FETCH_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.err
            });

        case actions.FETCH_LOAN_SUCCESS:
            return Object.assign({}, state, {
                loanList: action.loanList,
                filterList: action.loanList,
                loading: false,
                error: null

            });
        
        case actions.UPDATE_SEARCH:
            const keyLower = action.key.toLowerCase();
            const newList = state.loanList.filter(item => {
                const itemStr = `${item.loan_number}|${item.state}|${item.last_name}|${item.first_name}`;
                if (itemStr.toLowerCase().includes(keyLower))  return true;
            });
            return Object.assign({}, state, {
                filterList: newList,
                key: keyLower
            });

        default:
            return state;
    }

}