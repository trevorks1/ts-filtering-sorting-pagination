import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css'; 
import App from '../App'; 
import {Provider} from "react-redux"; 
import {createStore} from "redux"; 
import reducers from "."; 
import reportWebVitals from '../reportWebVitals';

// storing createStore in a variable declaration for our reducers
const store = createStore(reducers); 
ReactDOM.render(<Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);     
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();

  // Actions for functions to return an object. Passing actions to the reducers
const SORT_BY_ALPHABET = "SORT_BY_ALPHABET"; 
const SORT_BY_PRICE = "SORT_BY_PRICE"; 
const LOAD_DATA = "LOAD_DATA"; 
const FILTER_BY_PRICE = "FILTER_BY_PRICE"; 
export const sortByPrice = payload => ({
    type: SORT_BY_PRICE, 
    payload
}); 
export const filterByPrice = payload => ({
    type: FILTER_BY_PRICE, 
    payload
}); 
export const sortByAlphabet = payload => ({
    type: SORT_BY_ALPHABET, 
    payload
}); 
export const laodDate = payload => ({
    type: LOAD_DATA, 
    payload
}); 
  