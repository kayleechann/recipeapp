import {db} from "../db.js"

export const register = (req,res) =>{

    // check for an existing user
    const q = "SELECT * FROM account WHERE email = ? OR username = ?"

    db.query(q,[req.body.email, req.body.username], (err,data) => {
        if (err) return res.json(err);
        // if a user already exits
        if (data.length) return  res.status(409).json("user already exists!");

        // encrypt password
        const pass = req.body.password

        const q = "INSERT INTO account (`username`, `email`, `password) VALUES (?)"
        const values  = [
            req.body.username,
            req.body.email, 
            req.body.email,
        ]

        db.query(q, [values], (err,data)=>{
            if (err) return res.json(err);

            return res.status(200).json("user has been created.");
        });
    })
    
}

export const login = (req,res) =>{
    
}
  
export const logout = (req,res) =>{
    
}