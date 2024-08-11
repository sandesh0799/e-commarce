import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { thunk } from "redux-thunk"
import { productListReducer, productReducer } from './reducers/Product';
import { userLoginReducer, userRegisterReducer } from './reducers/User';
import { cartReducer } from './reducers/Cart';

const persistConfig = {
    key: 'root',
    storage,
    version: 1
};

const rootReducer = combineReducers({
    productListReducer,
    productReducer,
    userLoginReducer,
    userRegisterReducer,
    cartReducer,
    
    // orderReducer,
    // orderDetailReducer,
    // orderPaymentReducer,
    // orderListReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    applyMiddleware(thunk) // Apply thunk middleware
);

export const persistor = persistStore(store);