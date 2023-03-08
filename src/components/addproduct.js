// import { TextField } from '@mui/material';
// import React from 'react';
// function Newpro(){
//     return (
//         <div>

//         <div class="addproduct">
//         <label>Product Name:</label>
//         <TextField required id="filled-basic" label="Product Name" type="text" variant='filled' >
//         </TextField>
//         <label>Category:</label>
//         <TextField required id="filled-basic" label="Category" type="text" variant='filled' >
//         </TextField>
//         <label>Brand:</label>
//         <TextField required id="filled-basic" label="Brand" type="text" variant='filled' >
//         </TextField>
//         <label>Quantity:</label>
//         <TextField required id="filled-basic" label="Quantity" type="text" variant='filled' >
//         </TextField>
//         <label>Price:</label>
//         <TextField required id="filled-basic" label="Pricenp" type="text" variant='filled' >
//         </TextField>
        
//         <button href="#" variant="contained" color='success' > AddProduct </button>

//         </div>

//         </div>
//     )
// }
import React, { Component } from 'react'
import CartService from '../CartService';
import { HashHistory } from '@remix-run/router';

import axios from 'axios';

class Addproduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            // productId: this.props.match.params,
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

        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }

    componentDidMount(){

        if(this.state.productId === '_add'){
            return
        }else{
            CartService.getProductsById(this.state.productId).then( (res) =>{
                let product = res.data;
                this.setState({productName: product.productName,
                    category: product.category,
                    brand : product.brand,
                    quantity: product.quantity,
                    price: product.price
                });
            });
        }   

    }
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {productName: this.state.productName,
             category: this.state.category,
            brand: this.state.brand,
            quantity: this.state.quantity,
            price: this.state.price };
        console.log('product => ' + JSON.stringify(product));
        // axios.post('http://127.0.0.1:8080',product)
        // if(this.state.productId === '_add'){
            CartService.addProduct(product).then(res =>{
                this.props.HashHistory.push('/');
            });
            alert("Added Successfully");
            // axios.post("http://localhost:8080/products", { product })
            // .then(res => {
            //   console.log(res);
            //   console.log(res.data);
            // })
      
            
        // }else{
        //     CartService.updateProducts(product, this.state.productId).then( res => {
        //         this.props.history.push('/products');
        //     });
        // }
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
        this.props.history.push('/products');
    }

    getTitle(){
        if(this.state.productId === '_add'){
            return <h3 className="text-center">Add Product</h3>
        }else{
            return <h3 className="text-center">Add Product</h3>
        }
    }

    render() {
        return (
            
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
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

                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
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

export default Addproduct