import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from './redusers/rootReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;