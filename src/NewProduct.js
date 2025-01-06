import axios from 'axios';
import React from 'react';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';

class NewProduct extends React.Component {

    state = {
        productName: "ProductName",
        productNo: "ProductNo",
        price: 2022,
        quantity: 1
    }

    updateProductName = (t) => {
        this.setState({ productName: t });
        console.log("State of form =", this.state);
    }

    updatePrice = (t) => {
        this.setState({ price: t });
        console.log("State of form =", this.state);
    }

    updateProductNo = (t) => {
        this.setState({ productNo: t });
        console.log("State of form =", this.state);
    }

    updateQuantity = (t) => {
        this.setState({ quantity: t });
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
        axios.post(`http://localhost:8080/service/products/`, product)
            .then(result => {
                console.log(result);
                console.log(result.data);
                
                window.location.reload(false);
            })
    }

    render() {
        return (
            <div className="container">
                <div className='card2'>
                    <form onSubmit={this.handleFormSubmit}>
                        <div className='form-group'>

                            <h1>Create a New Product:</h1>
                            <FormInput
                                id="productName"
                                title="ProductName"
                                placeholder="Enter productName"
                                onChange={this.updateProductName}
                                required
                            />
                            <FormTextArea
                                id="productNo"
                                title="productNo"
                                placeholder="productNo"
                                onChange={this.updateProductNo}
                                required
                            />
                            <FormInput
                                id="productPrice"
                                type="number"
                                step="0.01"
                                title="Price"
                                placeholder="Price"
                                onChange={this.updatePrice}
                                required
                            />
                            <FormInput
                                id="productQuantity"
                                type="number"
                                step="1"
                                title="Quantity"
                                placeholder="0"
                                onChange={this.updateQuantity}
                                required
                            />

                        </div>
                        <button type="button" className="btn btn-light" onClick={this.handleCancel}>Cancel</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>)
    }
}

export default NewProduct;