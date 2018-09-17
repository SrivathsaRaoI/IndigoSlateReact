import React from 'react';
import {connect} from 'react-redux';

class Banner extends React.Component {
  constructor(){
    super();
  }
 render () {
  console.log(this.props.apiServiceReducer.message.response.data.banner.data.heading)
   return (
     <div>
       Banner <br/>
      {this.props.apiServiceReducer.message.response.data.banner.data.heading}
     </div>
   )
 }
}

const mapStateToProps = (state) => {
  return { apiServiceReducer: state.apiServiceReducer };
};

export default connect(mapStateToProps)(Banner);