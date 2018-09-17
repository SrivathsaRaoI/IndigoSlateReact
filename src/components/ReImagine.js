import React from 'react';
import {connect} from 'react-redux';

class ReImagine extends React.Component {
  constructor(){
    super();
  }
 render () {
   return (
     <div>
       ReImagine <br/>
     </div>
   )
 }
}

const mapStateToProps = (state) => {
  return { apiServiceReducer: state.apiServiceReducer };
};

export default connect(mapStateToProps)(ReImagine);