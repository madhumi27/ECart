import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CartService from '../CartService'

class ViewProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
                products: []
        }
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }
    
    addProduct(){
        this.props.history.push('/add-product/_add');
    }
    deleteProduct(productId){
        CartService.deleteProduct(productId).then( res => {
            this.setState({products: this.state.products.filter(product => product.productId !== productId)});
        });
    }
    viewProduct(productId){
        this.props.history.push(`/view-product/${productId}`);
    }
    editProduct(productId){
        this.props.history.push(`/add-product/${productId}`);
    }

    componentDidMount(){
        CartService.getProducts().then((res) => {
            this.setState({ products: res.data});
        });
    }


    render() {
        return (
            <div>
                 <h2 className="text-center">Products List</h2>
                 <div className = "row">
                   <button> <Link to="/add-product">Add Product</Link></button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                   
                                    <th> Product Name</th>
                                    <th> Category</th>
                                    <th> Brand</th>
                                    <th> Quantity</th>
                                    <th> Price</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(
                                        product => 
                                               <tr key = {product.productId}>
                                            
                                             <td> { product.productName} </td>   
                                             <td> {product.category}</td>
                                             <td> {product.brand}</td>
                                             <td> {product.quantity}</td>
                                             <td> {product.price}</td>
                                             <td>
                                            <button> <Link to="/update-product/:productId">Update Product</Link></button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(product.productId)} className="btn btn-danger">Delete </button>
                                                
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
           
        )
    }
}

export default ViewProduct