import React from "react";

class UserInfo extends React.Component {

    state = {
        name: `Doan Xem`,
        address: `Hoi Dan IT`,
        age: 26
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
        console.log(event)
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
        console.log(event)
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={() => this.handleOnChangeInput(event)}
                    />

                    <label>Your age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={() => this.handleOnChangeAge(event)}
                    />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfo;