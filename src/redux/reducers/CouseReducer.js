import ActionTypes from '../actiontypes/ActionTypes';
// initial reducer state
const initialState = {
};

// default reducer function
export default function EppReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_COURSE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}