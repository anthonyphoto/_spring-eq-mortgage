import * as actions from '../actions/loan';

const initialState = {
    loanList: [],
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




        default:
            return state;
    }

}