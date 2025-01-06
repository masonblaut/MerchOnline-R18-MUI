import { sliderClasses } from "@mui/material";
import React from "react";

class OneProduct extends React.Component
{

    handleCancel = (event) => {
        console.log("Canceling Display Product");
        this.props.onCancel();
    }

    render()
    {
        console.log("OneProduct opened");
        
        let selectedObject = null;

        for (let i = 0; i < this.props.productList.length; i++) {
            let count = i;
            console.log("Reading:" + this.props.productList[i].id +"  count:"+count);
            if (this.props.productList[i].id === this.props.currentlySelectedproductId) {
              selectedObject = this.props.productList[i];
              break;
            }
        }

        console.log(selectedObject);

        return (
            <div>
                <div align="center">
                <h2>Product Details</h2>
                    <div className="container" align="center">
                        <div className="row">
                            <div className="card2">
                            <img 
                                src={"../../assets/images/"+selectedObject.productNo}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src="../../assets/images/1.png"; 
                                }}
                                className="card-img-top"
                                alt="ProductName"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{selectedObject.productName}</h5>
                                <p className="card-text" align="center">{selectedObject.price}</p>
                                <p className="card-text" align="center">{selectedObject.quantity}</p>
                                <p className="card-text">{selectedObject.productNo}</p>
                                    <div align="center">
                                    <button type="button" className="btn btn-light" onClick={this.handleCancel}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OneProduct;