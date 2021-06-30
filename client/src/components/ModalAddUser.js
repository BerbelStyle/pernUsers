import React, { Fragment, useState } from "react";

const ModalAddUser = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [admin, isAdmin] = useState(false);

    const addUser = async e => {
        e.preventDefault();
        try {
            const body = { username, password, email, admin};
            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    const setUser = () => {
        setUsername("");
        setPassword("");
        setEmail("");
        isAdmin("");
    }

    return (
        <Fragment>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
            Add
            </button>

            <div class="modal" id="myModal" >
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Add User</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <div class="modal-body">
                                <p>Username</p>
                                <input type="text" className="form-control mb-5" value={username} onChange={e => setUsername(e.target.value)}/>
                                <p>Password</p>
                                <input type="text" className="form-control mb-5" value={password} onChange={e => setPassword(e.target.value)}/>
                                <p>Email</p>
                                <input type="text" className="form-control mb-5" value={email} onChange={e => setEmail(e.target.value)}/>
                                <p>Admin</p>
                                <input type="text" className="form-control mb-5" value={admin} onChange={e => isAdmin(e.target.value)}/>
                            </div>

                            <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick = {e => addUser(e)}>Add</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setUser()}>Cancel</button>
                            </div>

                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default  ModalAddUser;