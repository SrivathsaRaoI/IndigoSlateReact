import React from 'react';
import {connect} from 'react-redux';

class Footer extends React.Component {
  constructor(){
    super();
  }
 render () {
   return (
     <div>
       Footer <br/>
     </div>
   )
 }
}

const mapStateToProps = (state) => {
  return { apiServiceReducer: state.apiServiceReducer };
};

export default connect(mapStateToProps)(Footer);