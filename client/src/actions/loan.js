import {API_BASE_URL} from '../config';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const fetchRequest = () => ({
    type: FETCH_REQUEST
});

export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = err => ({
    type: FETCH_ERROR,
    err
})

export const FETCH_LOAN_SUCCESS = 'FETCH_LOAN_SUCCESS';
export const fetchLoanSuccess = loanList => ({
    type: FETCH_LOAN_SUCCESS,
    loanList

});

export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const updateSearch = key => ({
    type: UPDATE_SEARCH,
    key
});

export const fetchLoan = () => dispatch => {
    dispatch(fetchRequest());
    return fetch(`${API_BASE_URL}/data`)
        .then(res=>new Promise( (resolve) => setTimeout(()=> resolve(res), 400)))  //loading
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(list => dispatch(fetchLoanSuccess(list)))
        .catch(err => dispatch(fetchError(err)));
}

export const fetchLoanById = id => dispatch => {
    dispatch(fetchRequest());
    return fetch(`${API_BASE_URL}/data/loanid/${id}`)
        .then(res=>new Promise( (resolve) => setTimeout(()=> resolve(res), 200)))  //loading
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(list => dispatch(fetchLoanSuccess(list)))
        .catch(err => dispatch(fetchError(err)));
}

export const fetchLoanByAttr = (attr, val) => dispatch => {
    dispatch(fetchRequest());
    return fetch(`${API_BASE_URL}/data/attr/?${attr}=${val}`)
        .then(res=>new Promise( (resolve) => setTimeout(()=> resolve(res), 200)))  //loading
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(list => dispatch(fetchLoanSuccess(list)))
        .catch(err => dispatch(fetchError(err)));
}