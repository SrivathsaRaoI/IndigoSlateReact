import React from 'react';
import {connect} from 'react-redux';

class Deliver extends React.Component {
  constructor(){
    super();
  }
 render () {
   return (
     <div>
       Deliver <br/>
     </div>
   )
 }
}

const mapStateToProps = (state) => {
  return { apiServiceReducer: state.apiServiceReducer };
};

export default connect(mapStateToProps)(Deliver);