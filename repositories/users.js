import dbpool from "../utils/db.js";

export const getData = function (){
    const query = "SELECT user_id, name,email, password, create_at,updated_at FROM users"

    return dbpool.query(query)
}

export const createData = (name, email, password) => {
    let create_at = new Date()

    const query = "INSERT INTO users (name, email, password,create_at) VALUES (?,?,?,?)"
    const values = [name,email,password,create_at]
    const result = dbpool.query(query, values)

    return result
}

export const getdataById = (id) => {
 const query =  "SELECT user_id, name,email, password, create_at,updated_at FROM users WHERE  id = ?"   
 const value = [id]
 const result = db.query(query,value)

 return result
}

export const updateData = (id,name,email) =>{
    const query = "UPDATE users SET name = ?, email = ?, WHERE id = ?"
    const value = [name,email,id]
    const result = db.query(query,value)

    return result
}

export const deleteData = (id) => {
    const query = "DELETE FROM users WHERE id = ? "
    const value = [id]
    const result = db.query(query,value)

    return result
}