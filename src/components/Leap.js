import React from 'react';
import {connect} from 'react-redux';

class Leap extends React.Component {
  constructor(){
    super();
  }
 render () {
   return (
     <div>
       Leap <br/>
     </div>
   )
 }
}

const mapStateToProps = (state) => {
  return { apiServiceReducer: state.apiServiceReducer };
};

export default connect(mapStateToProps)(Leap);