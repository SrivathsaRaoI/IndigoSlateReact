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
  }
  componentDidMount(){
    this.props.setMessageValue()
  }
  render(){
    const message = this.props.message;
    console.log("srivathsa",message);
    return(
      <div className="App">
        <h1> Hello, World! rr mm kkk mmmm jjj</h1>
        <InputPreview value={message} />
        <Link to="/about">
        <button>Go to About</button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMessageValue: () => {
      dispatch(setMessage())
    }
  }
}

const mapStateToProps = (state) => {
  return { message: state.messageReducer };
};

export default connect(mapStateToProps,mapDispatchToProps)(hot(module)(App));

//export default App;