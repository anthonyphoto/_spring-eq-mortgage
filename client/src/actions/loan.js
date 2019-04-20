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