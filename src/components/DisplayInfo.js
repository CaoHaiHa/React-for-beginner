import React, { useEffect, useState } from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg';


const DisplayInfo = (props) => {
    const { listUsers } = props

    const [isShowHideListUser, setShowHideListUser] = useState(true)

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }

    console.log(`>>> Call me render`)

    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert('You deleted all the users')
            }
            console.log(`>>> Call me useEffect`)
        }, [listUsers]
    )

    return (
        <div className="display-info-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>Show list users</span>
            </div>
            {isShowHideListUser &&
                <>
                    {
                        listUsers.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <div>My name's {user.name}</div>
                                        <div>My age's {user.age}</div>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => { props.handleDeleteUser(user.id) }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })
                    }
                </>
            }
        </div>
    )
}

export default DisplayInfo;