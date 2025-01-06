import axios from 'axios';
import React from 'react';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';

class EditProduct extends React.Component {
    
    state = {
        id: 0,
        productNo: "",
        productName: "",
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

    handleCancel = (event) => {
        console.log("Canceling Edit Product");
        this.props.onCancel();
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Final submit = ", this.state);
        this.saveProduct(this.state);
    }

    saveProduct = async (product) => {
        axios.put(`http://localhost:8080/service/products/`, product)
        .then(result => {
            console.log(result);
            console.log(result.data);
            this.props.onCancel();
        })
    }
    
    render () {
        // console.log("EditProps", this.props);
        return (
        <div align="center">
            <h2>Edit Product Details</h2>
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
                    <h2>Edit Product: {this.state.productName}</h2>
                        <FormInput id="productName" title="productName" placeholder={this.state.productName} value={this.state.productName} onChange={this.updateProductName} />
                        <FormTextArea id="productNo" title="productNo" placeholder={this.state.productNo} value={this.state.productNo} onChange={this.updateProductNo} />
                        <FormInput id="productPrice" title="Price" placeholder={this.state.price} value={this.state.price} onChange={this.updatePrice} />
                        <FormInput id="productQuantity" title="Quantity" placeholder={this.state.quantity} value={this.state.quantity} onChange={this.updateQuantity} />
                        
                <button type="button" className="btn btn-light" onClick={this.handleCancel}>Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>)
    }
}

export default EditProduct;