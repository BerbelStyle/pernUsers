import React, { Fragment, useEffect, useState } from "react";
import ModalAddUser from "./ModalAddUser";
import ModalEditUser from "./ModalEditUser";

const ListUsers = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async() => {
        try {
            const response = await fetch("http://localhost:5000/users")
            const jsonData = await response.json()
            setUsers(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    };

    const deleteUser = async (id) => {
        try {
            const deleteUser = await fetch(`http://localhost:5000/users/${id}`, {
                method: "DELETE"
            })
            setUsers(users.filter(user => user.userid !== id));
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return  (
    <Fragment>
        <table className="table mt-5 text-center">
            <thead>
            <tr>
                <th>User</th>
                <th>E-mail</th>
                <th>Administrator</th>
                <th>Edit</th>
                <th>Delete</th>
                
            </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.userid}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.admin ? "Sí" : "No"}</td>
                        <td><ModalEditUser user={user}/></td>
                        <td><button className="btn btn-danger" onClick={() => deleteUser(user.userid)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
            <ModalAddUser/>
        </table>
    </Fragment>
    )
}

export default ListUsers;