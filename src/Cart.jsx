import React, {Component} from 'react';
import ItemDescription from './ItemDescription';

class Cart extends Component {
    render(){
        var itemsList = this.props.itemsList.map((item) => <li><ItemDescription item={item} /></li>);
        return(
            <div>
                <ul>
                    {itemsList}
                </ul>
            </div>
        );
    }
}
export default Cart;