import {FETCH_SMURF, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL, ADD_SMURF} from '../actions';




export const initialState = {
    smurfs: [],
    newSmurf:{
        name:'',
        nickname:'',
        position:''
    },
    isLoading:false,
    error:''
}

export const reducer = (state= initialState, action)=>{
    switch(action.type){
        case FETCH_SMURF:
            return {...state};
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfs:action.payload,
                isLoading:false
            };
        case FETCH_SMURF_FAIL:
            return{
                ...state,
                error:action.payload
            };
        case ADD_SMURF:
            const newSmurf = {
                name:action.payload,
                position:action.payload,
                nickname:action.payload,
                description:action.payload
            };
            return {
                ...state,
                smurfs: [...state.smurfs, newSmurf]
            }
    default:
        return state;
    }


}