import React, { Fragment, useEffect, useState } from "react";

const ModalEditUser = ({ user }) => {

    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState(user.password);
    const [email, setEmail] = useState(user.email);
    const [admin, isAdmin] = useState(user.admin);

    const updateUser = async e => {
        e.preventDefault();
        try {
            const body = {username, email, admin};
            const response = await fetch(`http://localhost:5000/users/${user.userid}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
            
        });
        console.log(body);
        window.location = "/";
        } catch (err) {
            console.log(err.message);
        }
    }

    const setUser = () => {
        setUsername(user.username);
        setEmail(user.email);
        isAdmin(user.admin)
    }

    return (
        <Fragment>
            <button type="button" class="btn btn-success" data-toggle="modal" data-target={`#id${user.userid}`}>
            Edit
            </button>

            <div class="modal" id={`id${user.userid}`}>
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Edit User</h4>
                </div>

                <div class="modal-body">
                    <p>Username</p>
                    <input type="text" className="form-control mb-5" value={username} onChange={e => setUsername(e.target.value)}/>
                    <p>Email</p>
                    <input type="text" className="form-control mb-5" value={email} onChange={e => setEmail(e.target.value)}/>
                    <p>Admin</p>
                    <input type="text" className="form-control mb-5" value={admin} onChange={e => isAdmin(e.target.value)}/>
                </div>

                <div class="modal-footer">
                <button type="button" class="btn btn-success" data-dismiss="modal" onClick = {e => updateUser(e)}>Edit</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setUser()}>Cancel</button>
                </div>

                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default ModalEditUser;