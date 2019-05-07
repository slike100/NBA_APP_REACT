import React from "react";
import { connect } from "react-redux"; // import connect from Redux
import { getPlayerData, getTeamData }  from "../redux/actions/restActions"
import PlayerCard from './player_card';




class Main extends React.PureComponent {

  componentWillMount(){
    this.props.getPlayerData();
    this.props.getTeamData();
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