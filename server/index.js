const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./dbconnection");
//middleware
app.use(cors());
app.use(express.json());


//ROUTES//

//create a user

app.post("/users", async(req, res) => {
    try {
        const { username, password, email, admin } = req.body;
        const newUser = await pool.query("INSERT INTO users (username, password, email, admin) VALUES($1, $2, $3, $4) RETURNING *", [username, password, email, admin]);
        res.json(newUser.rows[0])
    } catch (err) {
        console.error(err.message);
    }
})

//get all users

app.get("/users", async(req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows)
    } catch (err) {
        console.error(err.message);
        }
})

//get a user

app.get("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM users WHERE userId = $1", [id]);
        res.json(user.rows[0]);
        console.log(req.params);
    } catch (err) {
        console.error(err.message);
    }
})

//update a user

app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, admin } = req.body;
        const updateUser = await pool.query("UPDATE users SET username = $1, email = $2, admin = $3 WHERE userId = $4", [username, email, admin, id]);
        res.json("User updated!");
    } catch (err) {
        console.error(err.message);
    }
})

//delete a user

app.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM users WHERE userid = $1", [id]);
        res.json("User deleted!");
    } catch (err) {
        console.log(err.message);
    }
})

app.listen(5000, () => {
    console.log("Server started on port 5000");
})