import React from "react";

class AddUserInfo extends React.Component {

    state = {
        name: ``,
        address: `Hoi Dan IT`,
        age: ''
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        this.props.handleAddNewUser({
            id: Math.floor(Math.random() * 100) + 1 + `random`,
            name: this.state.name,
            age: this.state.age
        })
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

export default AddUserInfo;