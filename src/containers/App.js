import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Header from '../components/Header';
import AzureCosmosDb from '../components/AzureCosmosDb';
import Banner from '../components/Banner';
import Control from '../components/Control';
import Deliver from '../components/Deliver';
import Footer from '../components/Footer';
import Leap from '../components/Leap';
import Meet from '../components/Meet';
import ReImagine from '../components/ReImagine';
import SignInModal from '../components/SignInModal';
import {connect} from 'react-redux';
import {getCommonApiAction} from '../actions/apiServiceAction';
import "../assets/styles/App.css";

class App extends Component{
  constructor(){
    super();
  }
  componentDidMount(){
    this.props.getCommonApiAction()
  }
  render(){
    return(
      <div className="App">
        <h1> Hello, World! rr mm kkk mmmm jjj</h1>
        <Header />
        <AzureCosmosDb />
        <Banner />
        <Control />
        <Deliver />
        <Footer />
        <Leap />
        <Meet />
        <ReImagine />
        <SignInModal />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCommonApiAction: () => {
      dispatch(getCommonApiAction())
    }
  }
}

const mapStateToProps = (state) => {
  return { apiServiceReducer: state.apiServiceReducer };
};

export default connect(mapStateToProps,mapDispatchToProps)(hot(module)(App));
