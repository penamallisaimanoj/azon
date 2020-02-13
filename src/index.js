import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PersonCard from './PersonCard';
import ItemDescription from './ItemDescription';
import Cart from './Cart';
import * as serviceWorker from './serviceWorker';

var itemsList = [
    {
        name:"Item1",
        cost:100
    },
    {
        name:"Item2",
        cost:200
    }
];
ReactDOM.render(<Cart itemsList={itemsList} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
