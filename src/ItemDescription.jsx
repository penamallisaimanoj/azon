import React, {Component} from 'react';

class ItemDescription extends Component{
    render(){
        return(
            <div>
                <p>Item: {this.props.name}</p>
                <p>Quantity: {this.props.orderQuantity}</p>
                <p>Amount: {this.props.amount}</p>
            </div>
        );
    }
}

export default ItemDescription;