import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";


const Mycomponent = (props) => {

    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: `Hoi`, age: "16" },
            { id: 2, name: `Dan`, age: "30" },
            { id: 3, name: `IT`, age: "69" },
        ]
    )

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = [...listUsers]
        listUsersClone = listUsersClone.filter((item) => item.id !== userId)
        setListUsers(listUsersClone)
    }

    return (
        <>

            <br />
            <div className="a">
                <AddUserInfo
                    handleAddNewUser={handleAddNewUser}
                />
                <br /><br />
                <DisplayInfo
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className="b">

            </div>
        </>
    );
}


export default Mycomponent;