import React from 'react';
import ProductCard from './ProductCard';

class ProductList extends React.Component{
    handleSelectOne = (productId) => {
        //console.log("Selected id = ", productid);
        this.props.onSelectProduct(productId);
    }

    handleEditProduct = (productId) =>{
        //console.log("Edit this id =", productId);
        this.props.onEditProduct(productId);
    }

    handleDeleteProduct = (productId) =>{
        //console.log("Delete this id =", productId);
        this.props.onDeleteProduct(productId);
    }

    handleCancelDisplay = (productId) =>{
        this.props.handleCancelDisplay();
    }
    
    render () {
        const products = this.props.productList.map(
            (product) => {
                return (<ProductCard
                    productId = {product.id}
                    key = {product.id}
                    productName = {product.productName}
                    productNo = {product.productNo}
                    price = {product.price}
                    quantity = {product.quantity}
                    buttonText = "OK"
                    //image = {product.image}
                    handleSelectOne = {this.handleSelectOne}
                    editProduct = {this.handleEditProduct}
                    deleteProduct = {this.handleDeleteProduct} 
                    didNavigate = {this.props.didNavigate}
                />);
            }
        );
        return ( <div className="container">
            {products}
        </div>)
    }
}

export default ProductList;