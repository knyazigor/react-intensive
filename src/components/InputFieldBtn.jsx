import React from 'react';
import './InputFieldBtn.css';

class InputFieldBtn extends React.Component {
  render() {
    return (
      <button 
          className={`material-symbols-outlined input-field__btn ${this.props.hidden && 'input-field__btn_hidden'}`}
          onClick={this.props.handleClick}
        >
          {this.props.name}
        </button>
    )
  } 
}

export default InputFieldBtn;
