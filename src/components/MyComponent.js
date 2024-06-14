import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";


// class Mycomponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: `Hoi`, age: 16 },
//             { id: 2, name: `Dan`, age: 30 },
//             { id: 3, name: `IT`, age: 69 },
//         ]
//     }
//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }
//     handleDeleteUser = (userId) => {
//         let listUsersClone = [...this.state.listUsers]
//         listUsersClone = listUsersClone.filter((item) => item.id !== userId)
//         this.setState(
//             {
//                 listUsers: listUsersClone
//             }
//         )
//     }


//     //JSX
//     render() {



//         return (
//             <>

//                 <br />
//                 <div className="a">
//                     <AddUserInfo
//                         handleAddNewUser={this.handleAddNewUser}
//                     />
//                     <br /><br />
//                     <DisplayInfo
//                         listUsers={this.state.listUsers}
//                         handleDeleteUser={this.handleDeleteUser}
//                     />
//                 </div>
//                 <div className="b">

//                 </div>
//             </>
//         );
//     }
// }

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