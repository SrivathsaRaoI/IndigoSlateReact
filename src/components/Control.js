import React from 'react';
import {connect} from 'react-redux';

class Control extends React.Component {
  constructor(){
    super();
  }
 render () {
   return (
     <div>
       Control <br/>
     </div>
   )
 }
}

const mapStateToProps = (state) => {
  return { apiServiceReducer: state.apiServiceReducer };
};

export default connect(mapStateToProps)(Control);