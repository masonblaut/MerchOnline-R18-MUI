import React from 'react';
import { TextField } from '@mui/material';

class FormTextArea extends React.Component {
    state = {inputData: ""};

    handleChangeData = (e) =>{
        this.setState({inputData : e.target.value});
        console.log("Contents of the input = ", this.state.inputData);
        this.props.onChange(this.state.inputData);
    }
    
    render () {
        //was used inside of textarea before it was TextField: onBlur={this.handleChangeData}
        //<label for={this.props.id}>{this.props.title}</label>
        return (
        <div>
            <TextField sx={{m:'.5%'}} onChange={this.handleChangeData} value={this.state.inputData} type="text" className="form-control" id={this.props.id} placeholder={"Enter a new "+this.props.id+" like 1.png"} label={this.props.placeholder} />
        </div>
        )
    }
}
export default FormTextArea;