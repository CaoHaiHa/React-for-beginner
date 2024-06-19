import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useState } from "react";
import TableUser from "./TableUser";
import ModalUpdateUser from "./ModalUpdateUser";
import { toast } from 'react-toastify';

const ManageUser = () => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [dataUpdate, setDataUpdate] = useState({})
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
    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true)
        setDataUpdate(user)
    }
    const updateUser = (userUpdate) => {
        let newListUsers = [...listUsers]
        newListUsers = newListUsers.map((user) => {
            if (user.email === userUpdate.email) {
                user = userUpdate
                return user
            } else {
                return user
            }
        })
        console.log(newListUsers)
        setListUsers(newListUsers)
    }
    const handleClickBtnDelete = (user) => {
        let newListUsers = [...listUsers]
        newListUsers = newListUsers.filter((item) => item.email !== user.email)
        setListUsers(newListUsers)
        toast.success("Delete user success")
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
                        onClick={() => setShowModalCreateUser(true)}
                    >
                        <FcPlus /> Add new user
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnDelete={handleClickBtnDelete}
                    />

                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    addNewUser={addNewUser}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    updateUser={updateUser}
                />
            </div>
        </div>
    )
}

export default ManageUser;