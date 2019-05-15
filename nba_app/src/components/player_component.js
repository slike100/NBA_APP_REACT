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

    const playerPPG = () => {
      var points;
      for(let i = 0; i < this.props.playerStats.stats.regularSeason.season.length; i++) {
        if(this.props.playerStats.stats.regularSeason.season[i].seasonYear == this.state.year){
          points = (<div>
            {this.props.playerStats.stats.regularSeason.season[i].total.ppg}
          </div>)
        }
      }
      return points;
    }

    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}>{this.props.playerData.temporaryDisplayName}</ModalHeader>
          <ModalBody>
          </ModalBody>
          <ButtonDropdown isOpen={this.state.buttonToggle} toggle={this.toggle}>
            <DropdownToggle caret>
            Year
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.getYear}>2018</DropdownItem>
              <DropdownItem onClick={this.getYear}>2017</DropdownItem>
              <DropdownItem onClick={this.getYear}>2016</DropdownItem>
              <DropdownItem onClick={this.getYear}>2015</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
            <br></br>
            {playerPPG()}
            <h1>HELLO!!</h1>
          <ModalFooter>
          <Button color="primary" onClick={this.props.toggle}>Close</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PlayerModal;