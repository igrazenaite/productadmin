import React from 'react';
import ProductAdministrationComponent from '../ProductAdministrationComponent/ProductAdministrationComponent';

class Product extends React.Component{
    constructor(props){
        super(props);
        this.title=ProductAdministrationComponent.title;
        this.price=ProductAdministrationComponent.price;
        this.quantity=ProductAdministrationComponent.quantity;
        this.description=ProductAdministrationComponent.description;
        this.imageurl=ProductAdministrationComponent.imageurl;
    }
 letmeknow=()=>{console.log("this works")}   
    render(){
        return(
            <div className="row">
                <div className="thumbnail">
                    <img className="image"
                        src={this.imageurl}
                        alt="product"/>
                    <div className="caption">
                        <h3>{this.title}</h3>  
                            <p>Price: {this.price}$</p>
                            <p>Quantity: {this.quantity}</p>
                            <p>Description: {this.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export var NewProduct=Product;
export default Product;
