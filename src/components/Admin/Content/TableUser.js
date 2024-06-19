import { useEffect } from "react"

const TableUser = (props) => {

    const { listUsers, setListUsers } = props

    //componentDidMount
    useEffect(() => {

    }, [])

    return (
        <>
            <table className="table table-striped table-info table-hover table-bordered border-dark">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Email</th>
                        <th scope="col">Username</th>
                        <th scope="col">Role</th>
                        <th scope="col">Image</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((user, index) => {
                            return (
                                <tr key={`table-users-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>{user.role}</td>
                                    <td>{user.image}</td>
                                    <td>
                                        <button className="btn btn-secondary">View</button>
                                        <button className="btn btn-warning mx-3">Update</button>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    {listUsers && listUsers.length === 0 &&
                        <tr>
                            <td colSpan={'5'}>Not found data</td>
                        </tr>}
                </tbody>
            </table>
        </>
    )
}

export default TableUser;