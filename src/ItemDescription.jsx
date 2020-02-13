import React, {Component} from 'react';

class ItemDescription extends Component{
    render(){
        return(
            <div>
                <p>Name: {this.props.item.name}</p>
                <p>Cost: {this.props.item.cost}</p>
            </div>
        );
    }
}
export default ItemDescription;