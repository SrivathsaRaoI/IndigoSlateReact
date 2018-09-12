import React from 'react';
export default class InputPreview extends React.Component {
 render () {
   console.log(this.props.value.message.response.data.banner.data.heading)
   return (
     <div>
       {this.props.value.message.response.data.banner.data.heading}
     </div>
   )
 }
}