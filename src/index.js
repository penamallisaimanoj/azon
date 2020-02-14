import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cart from './Cart';
import * as serviceWorker from './serviceWorker';

var userInfo = {
    name:"UserName",
    age:99
}
var itemsList = [
    {
        name:"Item1",
        orderQuantity:1,
        amount:100
    },
    {
        name:"Item2",
        orderQuantity:3,
        amount:200
    },
    {
        name:"Item3",
        orderQuantity:5,
        amount:300
    }
];

ReactDOM.render(<Cart userInfo={userInfo} itemsList={itemsList} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
