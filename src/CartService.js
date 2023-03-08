import axios from 'axios';
const ECART_API_BASE_URL = "http://localhost:8080/products";
class CartService {

    getProducts(){
        return axios.get(ECART_API_BASE_URL);
    }

    addProduct(product){
        return axios.post(ECART_API_BASE_URL, product);
    }

    getProductsById(productId){
        return axios.get(ECART_API_BASE_URL + '/' + productId);
    }

    updateProducts(product, productId){
        return axios.put(ECART_API_BASE_URL ,product, productId);
    }

    deleteProduct(productId){
        return axios.delete(ECART_API_BASE_URL + '/' + productId);
    }
}

export default new CartService()