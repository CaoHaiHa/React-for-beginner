import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";


class Mycomponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: `Hoi`, age: 16 },
            { id: 2, name: `Dan`, age: 30 },
            { id: 3, name: `IT`, age: 69 },
        ]
    }
    handleAddNewUser = (userObj) => {
        console.log(`>>>Check data from parent:`, userObj)
        this.setState({
            listUsers: [...this.state.listUsers, userObj]
        })
    }


    //JSX
    render() {
        return (
            <div>
                <AddUserInfo
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br /><br />
                <DisplayInfo
                    listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}

export default Mycomponent;