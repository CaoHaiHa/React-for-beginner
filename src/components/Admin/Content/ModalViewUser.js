import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalViewUser = (props) => {
    const { show, setShow, dataView } = props
    const handleClose = () => {
        setShow(false);
    }

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("USER")
    const [image, setImage] = useState("")
    const [previewImage, setPreviewImage] = useState("")

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>View a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3 modal-view-body">
                        <div className="col-md-6 text">
                            <label className="form-label text-label">Email:</label>
                            <div>{dataView.email}</div>
                        </div>
                        <div className="col-md-6 text">
                            <label className="form-label text-label">User Name:</label>
                            <div>{dataView.username}</div>
                        </div>
                        <div className="col-md-6 text">
                            <label className="form-label text-label">Role:</label>
                            <div>{dataView.role}</div>
                        </div>
                        <div className="col-md-6 text">
                            <label className="form-label text-label">Image:</label>
                            <div>{dataView.image}</div>
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalViewUser;