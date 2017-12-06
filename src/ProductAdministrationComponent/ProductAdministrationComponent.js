import React from 'react';

class ProductAdministrationComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={value : ''};
    }

    changeProps = (event) => {this.setState({value: event.target.value})};
    handleSubmit = (event)=> {this.setState({value: ''});
    event.preventDefault();
    }

    render(){
        return(
            <form>
                <div className="form-group">
                    <label htmlFor="productTitle">Title: {this.state.value} </label>
                    <input type="text" title={this.props.changeProps} />
                </div><br/>
                <div className="form-group">
                    <label htmlFor="productPrice">Price: {this.state.value}</label>
                    <input type="text"  price={this.props.changeProps}/>
                </div><br/>
                <div className="form-group">
                    <label htmlFor="productQuantity">Quantity: {this.state.value}</label>
                    <input type="text" quantity={this.props.changeProps}/>
                </div><br/>
                <div>
                    <label htmlFor="productDescription">Description: {this.state.value}</label>
                    <textarea className="form-control" rows="3" description={this.props.changeProps} ></textarea>
                </div><br/>    
                <div className="form-group">
                    <label htmlFor="productImage">Upload files: {this.state.value}</label>
                    <input type="file" id="productImage" imageurl={this.props.changeProps}/>
                </div><br/>
                <br/>
                <button type="save" className="btn btn-default" value={this.state.value}
                        onClick={this.handleSubmit}>Save</button>
            </form>);     
        } 
        
    }

export var Administration = ProductAdministrationComponent;
export default ProductAdministrationComponent;