import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import loanReducer from './reducers/loan';

const store = createStore(
    combineReducers({
        form: formReducer,
        loan: loanReducer,
    }),
    applyMiddleware(thunk)  // ajax handling
);

export default store;
