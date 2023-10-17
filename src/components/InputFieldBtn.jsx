import React from 'react';
import './InputFieldBtn.css';

class InputFieldBtn extends React.Component {
  render() {
    const { hidden, disabled } = this.props;
    return (
      <button 
        className={`material-symbols-outlined input-field__btn ${hidden ? 'input-field__btn_hidden' : ''}`}
        disabled={disabled}
        onClick={this.props.handleClick}          
      >
        {this.props.name}
      </button>
    )
  } 
}

export default InputFieldBtn;
