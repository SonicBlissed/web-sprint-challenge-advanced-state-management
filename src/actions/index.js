import axios from 'axios';

export const FETCH_SMURF = 'FETCH_SMURF';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';
export const ADD_SMURF = 'ADD_SMURF';

export const getSmurf = () => dispatch => {
    dispatch({type:FETCH_SMURF})
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log('test res', res.data);
        dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err);
        dispatch({type: FETCH_SMURF_FAIL, payload: err.response.message})
    })
}

export const addSmurf = newSmurf => dispatch => {
    return (dispatch => {
        axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            console.log(res.data)
            dispatch({type:ADD_SMURF, payload:res.data})
        })
    })
};
