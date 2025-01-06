import React from 'react';
import TextField from '@mui/material/TextField';


class SearchForm extends React.Component {
    state = {inputtext: ""};
    
    handleChangeInput = (event) =>{
        this.setState({inputtext: event.target.value});
        console.log(event.target.value);
    }

    handleFormSubmit = (event) => {
        //alert(this.state.inputtext);
        event.preventDefault();
        if(this.state.inputtext !== "")
        {
            this.props.onSubmit(this.state.inputtext)
        }
        else
        {
            this.props.onCancel();
        }
        
    }

    render(){
        return ( 
        <div>
            <form onSubmit ={this.handleFormSubmit}>
                <div className="form-group">
                    <TextField
                        onChange={this.handleChangeInput}
                        margin="normal"
                        fullWidth
                        name="form-control"
                        label="Search Products:"
                        variant="standard"
                        color="companyPurple"
                    />
                </div>
                
            </form>
        </div>)
    }
}

export default SearchForm;