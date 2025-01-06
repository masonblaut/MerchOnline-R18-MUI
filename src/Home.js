import React from 'react';
import './App.css';
import dataSource from './dataSource';

import SearchForm from './SearchForm';
import ProductList from './ProductList';
import { Navigate, useNavigate} from 'react-router-dom';
import OneProduct from './OneProduct';
import { Typography } from '@mui/material';
import EditProduct from './EditProduct';
import DeleteProduct from './DeleteProduct';

class Home extends React.Component {

state = {productList : [], searchphrase : "", currentlySelectedproductId: 0, didNavigate: false, dest: ""};
  
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await dataSource.get('/service/products/');
    console.log({productList: response.data});
    this.setState({productList: response.data});
  }

  updateSearchResults = async (phrase) => {
    console.log("phrase = ", phrase);
    this.setState({searchphrase: phrase});
    const response = await dataSource.get('/service/products/search/productName/'+phrase, {
      auth: {
        username: "test",
        password: "test"
      }});
    console.log(response.data);
    this.setState({productList: response.data});
  }

  selectProduct = (id) => {
    console.log("updateSingleProduct =", id);
    this.setState({currentlySelectedproductId : id }, () => {
      console.log("state: ", this.state)
      this.setState({ dest:"view"});
      this.setState({ didNavigate: true });
    });
  }

  editProduct = (id) => {
    console.log("App. Edit currentlyselectedId =", id);
    this.setState({currentlySelectedproductId : id }, () => {
      console.log("state: ", this.state)
      this.setState({ dest:"edit"});
      this.setState({ didNavigate: true });
    });
  }

  deleteSingleProduct = (id) =>
  {
    console.log("App. Delete Id: ", id);
    this.setState({currentlySelectedproductId : id }, () => {
      console.log("state: ", this.state)
      this.setState({ dest:"delete"});
      this.setState({ didNavigate: true });
    });
  }

  cancelNewProduct = () =>
     {
          //history.push('/');
          console.log("Cancelling New Product");
          window.location.reload(false);          
     }

    cancelSearch = () =>
    {
      console.log("Cancelling Search Product");
      window.location.reload(false); 
    }

    cancelEditProduct = () =>
    {
        //history.push('/');
        console.log("Cancelling Edit Product");
        window.location.reload(false);         
    }

    cancelDisplayProduct = () =>
    {
        //history.push('/');
        console.log("Cancelling Display Product");
        window.location.reload(false);          
    }

    cancelDeleteProduct = () =>
    {
        //history.push('/');
        console.log("Cancelling Delete Product");
        window.location.reload(false);          
    }

    render(){
      if (this.state.didNavigate) {
        if(this.state.dest == "view")
          {
            return (
              <div className="oneProduct">
                <OneProduct productList={this.state.productList} currentlySelectedproductId={this.state.currentlySelectedproductId} onCancel={this.cancelDisplayProduct}/>
              </div>
            )
          }
        if(this.state.dest == "edit")
          {
            return (
              <div className="editProduct">
                <Typography>Edit Product:</Typography>
                <EditProduct productList={this.state.productList} currentlySelectedproductId={this.state.currentlySelectedproductId} onCancel={this.cancelEditProduct}/>
              </div>
            )
          }
        if(this.state.dest == "delete")
            {
              return (
                <div className="deleteProduct">
                  <Typography>Delete Product?</Typography>
                  <DeleteProduct productList={this.state.productList} currentlySelectedproductId={this.state.currentlySelectedproductId} onCancel={this.cancelDeleteProduct}/>
                </div>
              )
            }
        
      }
      else{
        return (          
          <div className="home">
          <SearchForm onSubmit={this.updateSearchResults} onCancel={this.cancelSearch}/>
          <ProductList productList={this.state.productList} onSelectProduct={this.selectProduct} onDeleteProduct={this.deleteSingleProduct} onEditProduct={this.editProduct}  />
          </div>
      )
      }
        
    }
    
}

export default Home