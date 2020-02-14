import React, {Component} from 'react';
import ItemDescription from './ItemDescription';
import UserInfo from './UserInfo';

class Cart extends Component {
    render(){
        return(
            <div>
                <div>
                    {<UserInfo {...this.props.userInfo}/>}
                </div>
                <h4>Shopping Cart</h4>
                <ul>
                    {this.props.itemsList.map((item) => <li><ItemDescription {...item} /></li>)}
                </ul>
            </div>
        );
    }
}
export default Cart;