import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// import { reducer as reduxFormReducer, } from 'redux-form';
import thunk from 'redux-thunk';

import Reducers from '../reducers';


const middleware = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  ...Reducers,
});
middleware.push(
  thunk.withExtraArgument({
    client: {},
  }),
);
export const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;
// export const persistor = persistStore(store);
