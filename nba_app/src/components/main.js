import React from "react";
import { connect } from "react-redux"; // import connect from Redux
import { getPlayerData, getTeamData, getIndividualPlayer }  from "../redux/actions/restActions"
import PlayerCard from './player_card';




class Main extends React.PureComponent {

  componentWillMount(){
    this.props.getPlayerData();
    this.props.getTeamData();
    this.props.getIndividualPlayer();
  }

  render() {
    return (
      <div>
        <PlayerCard />
      </div>
    )
  }
}

const mapDispatchToProps = {
  getPlayerData,
  getTeamData,
  getIndividualPlayer,
}

function mapStateToProps(state){
  return {
    testing: state.testing,
    dataLoaded: state.dataLoaded,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);