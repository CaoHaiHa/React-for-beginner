import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";

class Mycomponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: `Hoi`, age: 16 },
            { id: 2, name: `Dan`, age: 30 },
            { id: 3, name: `IT`, age: 69 },
        ]
    }
    //JSX
    render() {
        return (
            <div>
                <UserInfo />
                <br /><br />
                <DisplayInfo
                    listUsers={this.state.listUsers}

                />
            </div>
        );
    }
}

export default Mycomponent;