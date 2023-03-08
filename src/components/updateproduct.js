import CartService from "../CartService";
import { Component } from "react";
import React from 'react';
import { HashHistory } from "@remix-run/router";
import axios from "axios";
import { Link } from "react-router-dom";
class Updateproduct extends Component {
    constructor(props) {
        super(props)

        this.state = {

            // productId: this.props.match.params.productId,
            productName: '',
            category: '',
            brand: '',
            quantity: '',
            price: ''
        }
       
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeBrandHandler = this.changeBrandHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);

        this.updateProduct = this.updateProduct.bind(this);
    }

    componentDidMount(){
        CartService.getProductsById(this.state.productId).then( (res) =>{
            let product = res.data;
            this.setState({
                productName: product.productName,
                    category: product.category,
                    brand : product.brand,
                    quantity: product.quantity,
                    price: product.price
            });
        }); 
    }

    updateProduct = (e) => {
        e.preventDefault();
        let product = {
            productId: 353,
            productName: this.state.productName,
            category: this.state.category,
           brand: this.state.brand,
           quantity: this.state.quantity,
           price: this.state.price  
        };
        console.log('product => ' + JSON.stringify(product));
        console.log('productId => ' + JSON.stringify(this.state.productId));
        axios.put('http://localhost:8080/productsupdt',product)
        // CartService.updateProducts(product, 154).then( res => {
        //     this.props.HashHistory.push('/');
        // });
        alert("Updated Successfully")
       
    }

 
    changeProductNameHandler= (event) => {
        this.setState({productName: event.target.value});
    }
    changeCategoryHandler= (event) => {
        this.setState({category: event.target.value});
    }
    changeBrandHandler= (event) => {
        this.setState({brand: event.target.value});
    }
    changeQuantityHandler= (event) => {
        this.setState({quantity: event.target.value});
    }
    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }


    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                    <label> Product Name: </label>
                                    <input placeholder="Product Name" name="productName" className="form-control" 
                                        value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Category: </label>
                                    <input placeholder="Category" name="category" className="form-control" 
                                        value={this.state.category} onChange={this.changeCategoryHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Brand: </label>
                                    <input placeholder="Brand" name="brand" className="form-control" 
                                        value={this.state.brand} onChange={this.changeBrandHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Quantity: </label>
                                    <input placeholder="Quantity" name="quantity" className="form-control" 
                                        value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Price: </label>
                                    <input placeholder="Price" name="price" className="form-control" 
                                        value={this.state.price} onChange={this.changePriceHandler}/>
                                </div>

                                        <button className="btn btn-success"  onClick={this.updateProduct}><Link to="/">Save</Link></button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default Updateproduct