import React from 'react';
import {connect} from 'react-redux';

class Banner extends React.Component {
  constructor(){
    super();
  }
 render () {
   return (
     <div>
       Banner <br/>
     </div>
   )
 }
}

const mapStateToProps = (state) => {
  return { apiServiceReducer: state.apiServiceReducer };
};

export default connect(mapStateToProps)(Banner);