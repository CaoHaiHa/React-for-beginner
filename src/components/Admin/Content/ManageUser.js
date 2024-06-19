import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useState } from "react";
import TableUser from "./TableUser";

const ManageUser = (props) => {

    const [showModal, setShowModal] = useState(false)
    const [listUsers, setListUsers] = useState([
        {
            email: "yeahsure@gmail.com",
            username: "Yeah Sure",
            role: "USER",
            image: ""
        },
        {
            email: "hoidanit@gmail.com",
            username: "Hoi Dan IT",
            role: "USER",
            image: ""
        },
        {
            email: "caohaiha@gmail.com",
            username: "Cao Hai Ha",
            role: "ADMIN",
            image: ""
        }
    ])
    const addNewUser = (user) => {
        let newListUsers = [...listUsers]
        newListUsers = [...newListUsers, user]
        setListUsers(newListUsers)
    }

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
                    <TableUser
                        listUsers={listUsers}
                        setListUsers={setListUsers}
                    />

                </div>
                <ModalCreateUser
                    show={showModal}
                    setShow={setShowModal}
                    addNewUser={(user) => addNewUser(user)}
                />
            </div>
        </div>
    )
}

export default ManageUser;