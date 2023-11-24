import { combineReducers, configureStore } from '@reduxjs/toolkit';
import questionReducer from './stateq';

import resultReducer from './stater';

const rootReducer = combineReducers({
    questions : questionReducer,
    result : resultReducer
})

export default configureStore({ reducer : rootReducer});




