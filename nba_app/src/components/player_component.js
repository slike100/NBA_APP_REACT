import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { statement } from '@babel/template';


class PlayerModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      buttonToggle: false,
      year: 2018,
    }
  }
  
  toggle = () => {
    this.setState(prevState => ({
      buttonToggle: !prevState.buttonToggle,
    }));
  }

  getYear = (e) => {
    console.log(e.target.innerText);
    this.setState({
      year: e.target.innerText,
    })
  }


  render() {

    const playerStats = () => {
      return this.props.playerStats.stats.regularSeason.season.map( (stats, index) => {
        if(stats.seasonYear == this.state.year){
          return (<div key={index}>
            <p>PPG: {stats.total.ppg}</p>
            <p>APG: {stats.total.apg}</p>
            <p>RPG: {stats.total.rpg}</p>
            <p>BPG: {stats.total.bpg}</p>
            </div>)
        }
      })
    }

    const numberOfYears = () => {
      return this.props.playerStats.stats.regularSeason.season.map( (year, index) => {
        return (<DropdownItem key={index} onClick={this.getYear}>{year.seasonYear}</DropdownItem>)
      });
    }

    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}>{this.props.playerData.temporaryDisplayName}</ModalHeader>
          <ModalBody>
          </ModalBody>

          <ButtonDropdown isOpen={this.state.buttonToggle} toggle={this.toggle}>
            <DropdownToggle caret>
            Year: {this.state.year}
            </DropdownToggle>
            <DropdownMenu>
              {numberOfYears()}
            </DropdownMenu>
          </ButtonDropdown>
            <br></br>
            {playerStats()}
          <ModalFooter>
          <Button color="primary" onClick={this.props.toggle}>Close</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PlayerModal;