import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { statement } from '@babel/template';

class PlayerModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      buttonToggle: false,
    }
  }
  
  toggle = () => {
    this.setState(prevState => ({
      buttonToggle: !prevState.buttonToggle,
    }));
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader>
          <ModalBody>
          </ModalBody>
          <ButtonDropdown isOpen={this.state.buttonToggle} toggle={this.toggle}>
            <DropdownToggle caret>
            Year
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider/>
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
            {this.props.playerData.temporaryDisplayName}
            <br></br>
            PPG: {this.props.playerStats.stats.careerSummary.ppg}
          <ModalFooter>
          <Button color="primary" onClick={this.props.toggle}>Close</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PlayerModal;