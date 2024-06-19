import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useState } from "react";
import TableUser from "./TableUser";

const ManageUser = (props) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button
                        className="btn btn-warning"
                        onClick={() => setShowModal(true)}
                    >
                        <FcPlus />Add new user
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser />

                </div>
                <ModalCreateUser
                    show={showModal}
                    setShow={setShowModal}
                />
            </div>
        </div>
    )
}

export default ManageUser;