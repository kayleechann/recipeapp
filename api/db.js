import mysql from "mysql"


export const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"cpsc408",
    database:"Recipe "
});
