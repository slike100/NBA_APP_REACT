import React from "react";
import { connect } from "react-redux"; // import connect from Redux
import { changeStateTest, getPlayerData }  from "../redux/actions/restActions"
import PlayerCard from './player_card';



class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      what: '',
    }
  }

  componentWillMount(){
    this.props.getPlayerData();
  }

  render() {
    if(this.props.dataLoaded){
      var thing = <PlayerCard />;
    }

    return (
      <div>
        <h1>This will eventually be my sweet NBA APP!</h1>
        <button onClick={this.props.changeStateTest}>hello</button>
        <button onClick={this.props.getPlayerData}>getting Data from NBA</button>
        <h1><span style={{textDecoration: 'underline'}}>{this.props.testing}</span> this is the state! WHAAAAT UP!</h1>
        {thing}
      </div>
    )
  }
}

const mapDispatchToProps = {
  changeStateTest,
  getPlayerData,
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