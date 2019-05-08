import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.PureComponent {
  
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader>
          <ModalBody>
          </ModalBody>
            {this.props.playerData.temporaryDisplayName}
          <ModalFooter>
          <Button color="primary" onClick={this.props.toggle}>Do Something</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;