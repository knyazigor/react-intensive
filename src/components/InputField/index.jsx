import React from 'react';
import './style.css';
import InputFieldBtn from '../InputFieldBtn';

class InputField extends React.Component {
  constructor() {
    super();
    this.state = {
      focused: false,
      value: '',
    };
    this.input = React.createRef();
    console.log('constructor hook');
  }

  handleFocus = () => {
    this.setState({ focused: true });
  }

  handleBlur = () => {
    this.setState({ focused: false });
  }

  handleClear = (e) => {
    this.input.current.focus();
    this.setState({ value: '' });        
  }

  handleSearch = (e) => {
    this.input.current.focus();
    console.log(`Searching for ${ this.state.value }`);
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleKeyDown = ({ key }) => {
    if (key === 'Escape') {
      this.handleClear();
    } 
    if (key === 'Enter') {
      this.handleSearch();
    }
  }

  componentDidMount() {
    console.log('componentDidMount hook');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate hook')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount hook')
  }

  render() {
    return (
      <>
        <div className='input-field__wrapper'>
          <InputFieldBtn name='cancel' hidden={!this.state.value} handleClick={this.handleClear} />
          <input 
            type='text' 
            className='input-field' 
            value={this.state.value}
            ref={this.input} 
            onFocus={this.handleFocus} 
            onBlur={this.handleBlur} 
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
          <InputFieldBtn name='double_arrow' handleClick={this.handleSearch} />
        </div>
      </>
    )
  } 
}

export default InputField;