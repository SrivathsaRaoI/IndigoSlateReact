import React from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends React.Component {
  constructor(){
    super();
  }
 render () {
   const data = this.props.apiServiceReducer.data;
   const head = data.footer && data.footer.NoSign && data.footer.NoSign.head ||"";
   const info = data.footer && data.footer.NoSign && data.footer.NoSign.info ||"";
   const ButtonText = data.footer && data.footer.NoSign && data.footer.NoSign.ButtonText ||"";  


   return (
    <footer>
    <div className="container-fluid common-footer-color">
        <div className="container">
            <div className="text-center">
                <h1>{head}</h1>
                <p>{info}</p>
                <button type="button"  className="btn btnNosign btn-lg"><font-awesome-icon size="xs" icon="lock" /> {ButtonText}</button>
            </div>
        </div> 
    </div>
</footer>
   )
 }
}

const mapStateToProps = (state) => {
  return { apiServiceReducer: state.apiServiceReducer };
};

export default connect(mapStateToProps)(Footer);