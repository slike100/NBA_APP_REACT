import React from "react";
import { PureComponent } from 'react'; 
import { connect } from "react-redux";

class PlayerCard extends PureComponent {
  render() {
    return (
      <div>
        <ul>
          <li>
            {this.props.playerData[84].temporaryDisplayName}
          </li>
          <li>
            position: {this.props.playerData[84].pos}
          </li>
          <li>
            Years Pro: {this.props.playerData[84].yearsPro}
          </li>
          <li>
            College Attended: {this.props.playerData[84].collegeName}
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    testing: state.testing,
    playerData: state.playerData,
  }
}


export default connect(
  mapStateToProps,
)(PlayerCard);