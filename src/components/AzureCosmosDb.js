import React from 'react';
import {connect} from 'react-redux';

class AzureCosmosDb extends React.Component {
  constructor(){
    super();
  }
 render () {
   return (
     <div>
       AzureCosmosDb <br/>
     </div>
   )
 }
}

const mapStateToProps = (state) => {
  return { apiServiceReducer: state.apiServiceReducer };
};

export default connect(mapStateToProps)(AzureCosmosDb);