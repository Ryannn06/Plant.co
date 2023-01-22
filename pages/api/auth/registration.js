//const db = require('/lib/db');
import mysql from "mysql2/promise";
import { hashPassword } from '/lib/hashPassword';

//var mysql = require('mysql');

export default async function handler(req, res) {
  const data = req.body;
  const { email, username, password } = data;

  const hashedPassword = await hashPassword(password);
  const user = {
          username,
          email,
          hashedPassword
      };

  console.log(email);
  console.log(hashedPassword);

  const db2 = await mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database: 'project.js',
  });

  try {
      console.log('success')
      const result = await db2.execute({
          query: 'INSERT INTO user_registrations (username, email) VALUES(?, ?, ?)',
          values: [username, email],
      });
      console.log( result );
  } catch ( error ) {
      console.log( error );
  }

  return user;
}
