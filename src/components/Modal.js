import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

class IsModal extends Component {
    constructor(props){
        super(props)

        this.handleClose = this.handleClose.bind(this)
    }
    handleClose(){
        this.props.isShowModal()
    };
    render() {
        return (
            <Modal
            show={this.props.showModal}
            onHide={this.handleClose}
            backdrop={true}
            keyboard={true}
        >
            <Modal.Header closeButton>
            <Modal.Title>Notification</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    Sorry, the specified city was not found . . .
                </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        showModal : state.showModal
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        isShowModal : () =>{
            dispatch({
                type : 'SHOW_MODAL'
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(IsModal)