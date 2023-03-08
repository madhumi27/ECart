import React, { Component } from 'react'
import CartService from '../CartService'

class Getproduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productId: Number(this.props.match.params.productId),
            product: {}
        }
    }

    componentDidMount(){
        CartService.getProductsById(this.state.productId).then( res => {
            this.setState({product: res.data});
        })
    }

    render() {
        return (
        
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Product Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Product Name: </label>
                            <div> { this.state.product.productName }</div>
                        </div>
                        <div className = "row">
                            <label> Category: </label>
                            <div> { this.state.product.category }</div>
                        </div>
                        <div className = "row">
                            <label> Brand: </label>
                            <div> { this.state.product.brand }</div>
                        </div>
                        <div className = "row">
                            <label> Quantity: </label>
                            <div> { this.state.product.quantity }</div>
                        </div>
                        <div className = "row">
                            <label> Price: </label>
                            <div> { this.state.product.price }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Getproduct