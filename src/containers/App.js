import React, { Component} from "react";
import {hot} from "react-hot-loader";
import InputPreview from '../components/inputPreview';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message';
import "../assets/styles/App.css";
import {Link} from 'react-router-dom';


class App extends Component{
  constructor(){
    super();
    this.onChange = this.onChange.bind(this);
  }
  onChange(value){
    this.props.setMessageValue(value)
  }
  render(){
    const {message} = this.props.message;
    return(
      <div className="App">
        <h1> Hello, World! rr mm</h1>
        <InputPreview value={message}
        onChange={this.onChange} />
        <Link to="/about">
        <button>Go to About</button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMessageValue: (value) => {
      dispatch(setMessage(value))
    }
  }
}

const mapStateToProps = (state) => {
  return { message: state.messageReducer };
};

export default connect(mapStateToProps,mapDispatchToProps)(hot(module)(App));

//export default App;