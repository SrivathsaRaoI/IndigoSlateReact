import React from 'react';
import {connect} from 'react-redux';

class Meet extends React.Component {
  constructor(){
    super();
  }
 render () {
   return (
     <div>
       Meet <br/>
     </div>
   )
 }
}

const mapStateToProps = (state) => {
  return { apiServiceReducer: state.apiServiceReducer };
};

export default connect(mapStateToProps)(Meet);