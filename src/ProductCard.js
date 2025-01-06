import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink, Navigate, Outlet } from 'react-router-dom';
import OneProduct from './OneProduct';

class ProductCard extends React.Component {

    handleSelectOne = (event) => {
        console.log("id clicked =" + this.props.productId);
        this.props.handleSelectOne(this.props.productId);
    }

    handleProductEdit = (event) =>{
        this.props.editProduct(this.props.productId);
    }

    handleProductDelete = (event) =>{
        console.log("Delete id:", this.props.productId);
        this.props.deleteProduct(this.props.productId);
    }

    render(){
        //style={{width: '20%'}} <<put this in Div for 5 columns
        //variant="outlined" sx={{ maxWidth: 345 }}

        //inside Typography maybe : gutterBottom component="div"
        return (
            <div style={{width: '25%', height:'35%'}}>

        <Card sx={{m:'2%', p:'6%'}}>
            <CardMedia
                component="img"
                sx={{ width: '100%' }}
                image={"../../assets/images/"+this.props.productNo}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src="../assets/images/tshirtIcon.png"; 
                }}
            />
        <CardContent>
            <Typography variant="h3">
                {this.props.productName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Image Url: {this.props.productNo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            ${this.props.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {this.props.quantity} in stock.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" color="companyPurple" onClick={this.handleSelectOne}>Details</Button>
            <Button size="small" color="companyYellow" onClick={this.handleProductEdit}>Edit</Button>
            <Button size="small" color="companyRed" onClick={this.handleProductDelete}>Delete</Button>
        </CardActions>
        </Card>
<       Outlet />

            </div>
        );
    }
}

export default ProductCard;
