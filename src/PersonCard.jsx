import React, {Component} from 'react';

class PersonCard extends Component{
    render(){
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
            </div>
        );
    }
}
export default PersonCard;