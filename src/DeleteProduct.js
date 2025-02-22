import axios from 'axios';
import React from 'react';

class DeleteProduct extends React.Component {
    
    state = {
        id: 0,
        productName: "",
        productNo: "",
        price: 0,
        quantity: 0
    }

    componentDidMount(){
        let selectedObject = null;

        for (let i = 0; i < this.props.productList.length; i++) {
            let count = i;
            console.log("Reading:" + this.props.productList[i].id +"  count:"+count);
            if (this.props.productList[i].id === this.props.currentlySelectedproductId) {
              selectedObject = this.props.productList[i];
              break;
            }
        }
        this.setState({
            id:selectedObject.id, 
            productName:selectedObject.productName,
            productNo:selectedObject.productNo,
            price:selectedObject.price,
            quantity:selectedObject.quantity
        });
    }

    updateProductName = (t) =>{
        this.setState( {productName: t});
        console.log("State of form =", this.state);
    }

    updatePrice = (t) => {
        this.setState( {price: t});
        console.log("State of form =", this.state);
    }

    updateProductNo = (t) => {
        this.setState( {productNo: t});
        console.log("State of form =", this.state);
    }

    updateQuantity = (t) => {
        this.setState( {quantity: t});
        console.log("State of form = ", this.state);
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Final submit = ", this.state);
        this.saveProduct(this.state);
    }

    handleCancel = (event) => {
        console.log("Canceling Delete Product");
        this.props.onCancel();
    }

    saveProduct = async (product) => {
        axios.post(`http://localhost:8080/service/products/delete/`, product)
        .then(result => {
            console.log(result);
            console.log(result.data);
            this.props.onCancel();
        })
    }
    
    render () {
        console.log("DeleteProps", this.props);
        return (
        <div>
            <div align="center">
            <h2>Delete Product:</h2>
            <img 
                src={"../assets/images/"+this.state.productNo}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src="../assets/images/tshirtIcon.png"; 
                }}
                className="card-img-top"
                alt={this.state.productName}
            />
            
            <form onSubmit={this.handleFormSubmit}>
                <div align="center">
                    <h2>Delete Product {this.state.productName}?</h2>
                    <p align="center">Price: {this.state.price}</p>
                    <p align="center">Quantity: {this.state.quantity}</p>
                    <p align="center">ProductNo: {this.state.productNo}</p>
                    <h3 align="center">Are you sure you want to Delete { this.state.productName }?</h3>
                <button type="button" onClick={this.handleCancel}>Cancel</button>
                <button type="submit">Submit</button>
                </div>
            </form>
            </div>
        </div>)
    }
}

export default DeleteProduct;