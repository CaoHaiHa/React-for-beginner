import React from "react";

class DisplayInfo extends React.Component {
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {

        const { listUsers } = this.props
        console.log(listUsers)
        return (
            <div>
                <div onClick={() => { this.handleShowHide() }}>
                    <span>
                        {this.state.isShowListUser === true ? `Hide list user` : `Show list user`}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {
                            listUsers.map((user) => {

                                return (
                                    <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                        <div>My name's {user.name}</div>
                                        <div>My age's {user.age}</div>
                                        <hr />
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfo;