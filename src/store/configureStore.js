import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const loggerMiddleware = createLogger();

  const finalCreateStore = compose(
    applyMiddleware(thunk, loggerMiddleware)
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  return store;
}
