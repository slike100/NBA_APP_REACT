import React from "react";
import { PureComponent } from 'react'; 
import { connect } from "react-redux";
import { Table } from 'reactstrap';
import { Spinner } from 'reactstrap';
import ModalExample from './player_component';


class PlayerCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      playerData: [],
    };
  }

  getPlayerInfo = (e) => {
    console.log(e.target);
    for (let i = 0; i < this.props.playerData.length; i++) {
      if(this.props.playerData[i].personId === e.target.parentNode.dataset.id){
        var player = this.props.playerData[i];
      }
    }
    this.setState({
      playerData: player,
    })
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  populateModal = (e) => {
    this.toggle();
    this.getPlayerInfo(e);
  }


  findTeam = (player) => {
    for (let i = 0; i < this.props.teamData.length; i++) {
      if(this.props.teamData[i].teamId === player.teamId){
        return <td>{this.props.teamData[i].fullName}</td>
      } 
    }
  }
  
  condRender = () => {
    const { playerData } = this.props
    return playerData.map( (player, index) => {
      var isPro = player.yearsPro !== '0' ? <td>{player.yearsPro}</td> : <td>Rookie</td>
      var lastAffiliation = player.collegeName ? <td>{player.collegeName}</td> : <td>{player.lastAffiliation}</td>
      if(player.isActive){
        var team = this.findTeam(player);
        return (
            <tr key={player.personId} data-id={player.personId} onClick={this.populateModal}>
              <th scope="row">{index}</th>
              <td>{player.temporaryDisplayName}</td>
              {team}
              <td>{player.pos}</td>
              {isPro}
              {lastAffiliation}
            </tr>
        )
      }
    })
  }

  render() {
    if(this.props.playerData.length === 0 || this.props.teamData.length === 0){
      return (
        <div>
         <Spinner style={{ width: '7rem', height: '7rem' }} />{' '}
        </div>
      )
    } 
    else 
    {
    return (
      <div>
      <ModalExample modal={this.state.modal} toggle={this.toggle} playerData={this.state.playerData} />
      <Table hover bordered dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Team</th>
            <th>Position</th>
            <th>Years Pro</th>
            <th>College/Pre-NBA Affiliation</th>
          </tr>
        </thead>
        <tbody>
          {this.condRender()}
        </tbody>
      </Table>
      </div>
      )
      }
    }
  }

function mapStateToProps(state){
  return {
    playerData: state.playerData,
    teamData: state.teamData,
  }
}


export default connect(
  mapStateToProps,
)(PlayerCard);