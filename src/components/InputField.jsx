import React from 'react';
import './InputField.css';
import InputFieldBtn from './InputFieldBtn';

class InputField extends React.Component {
  constructor() {
    super();
    this.state = {
      focused: false,
      value: '',
      submitDisabled: false,
    };
    console.log('constructor hook');
  }

  handleFocus = () => {
    this.setState({ focused: true });
  }

  handleBlur = () => {
    this.setState({ focused: false });
  }

  handleClear = (e) => {
    this.props.inputRef.current.focus();
    this.setState({ value: '' });        
  }

  handleSearch = (e) => {
    const {props: { inputRef, handleAddToList }, state: { value }} = this;
    inputRef.current.focus();
    handleAddToList(this.state.value);
    console.log(`Searching for ${ value }`);
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
    console.log('componentDidUpdate hook');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount hook');
  }

  render() {
    const { 
      state: { value }, 
      props: { inputRef }, 
      handleBlur, handleChange, handleClear, handleFocus, handleKeyDown, handleSearch 
    } = this;

    return (
        <div className='input-field__wrapper'>
          <InputFieldBtn name='cancel' hidden={!value} handleClick={handleClear} />
          <input 
            type='text' 
            className='input-field' 
            value={value}
            ref={inputRef} 
            onFocus={handleFocus} 
            onBlur={handleBlur} 
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <InputFieldBtn name='double_arrow' handleClick={handleSearch} disabled={value === 'реакт'} />
        </div>
    )
  } 
}

export default React.forwardRef((props, ref) => <InputField inputRef={ref} {...props} />);
