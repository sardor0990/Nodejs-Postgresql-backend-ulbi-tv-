const db = require('../db')

class UserController{
    async createUser(req, res){
        const {name, surname} = req.body
        const newPerson = await db.query(`INSERT INTO person (name, surname) values ($1, $2) RETURNING *`, [name, surname])
        res.json(newPerson)
    }

    async getUsers(req, res){
        const users = await db.query(`SELECT * FROM PERSON`)
        res.json(users)
    }

    async getOneUser(req, res){
        const id = req.params.id
        const user = await db.query(`SELECT * FROM person WHERE id = $1`, [id])
        res.json(user)
    }

    async updateUser(req, res){
        const{id, name, surname} = req.body
        const user = await db.query(`UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *`, [name, surname, id])
        res.json(user)
    }

    async deleteUser(req, res){
        const id = req.params.id
        const user = await db.query(`DELETE from person WHERE id = $1`, [id])
        res.json(user)
    }
}

module.exports = new UserController()