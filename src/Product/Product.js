import React from 'react';
import ProductAdministrationComponent from './ProductAdministrationComponent/ProductAdministrationComponent';

class Product extends React.Component{
    constructor(props, context){
        super(props, context)
    }

    render(){
        return(
            <div className="row">
                <div className="thumbnail">
                    <img className="image"
                        src={''}
                        alt="habenaria radiata"/>
                    <div className="caption">
                        <h3>{this.props.Administration.title}</h3>  
                            <p>Price: {this.props.Administration.price}$</p>
                            <p>Quantity: {this.props.Administration.quantity}</p>
                            <p>Description: {this.props.Administration.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export var NewProduct=Product;
export default Product;
