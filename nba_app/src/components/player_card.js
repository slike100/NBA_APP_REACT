import React from "react";
import { PureComponent } from 'react'; 
import { connect } from "react-redux";
import { Table } from 'reactstrap';
import { Spinner } from 'reactstrap';


class PlayerCard extends PureComponent {


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
            <tr key={player.personId} data-id={player.personId} onClick={this.playerModelPopulate}>
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

 playerModelPopulate = (e) => {
   console.log(e.target.parentNode.dataset.id);
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