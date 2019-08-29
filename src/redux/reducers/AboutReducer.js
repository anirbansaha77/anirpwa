import ActionTypes from '../actiontypes/ActionTypes';
// initial reducer state
const initialState = {
    News: [],
};

// default reducer function
export default function EppReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_NEWS:
            const news = Object.assign({}, state.News, action.payload);
            return Object.assign({}, state, {news});
        default:
            return state;
    }
}