import getDB from '../db.js';

export async function userExists({ email, username }) {
  const db = getDB();
  const query = `
    SELECT id FROM user_account
    WHERE email = $1 OR username = $2;
  `;
  const response = await db.query(query, [email, username]);
  return response.rowCount > 0;
}

export async function createNewUser(user) {
  const db = getDB();
  const query = `
    INSERT INTO user_account (
      email,
      password,
      first_name,
      last_name,
      username,
      birthday
    ) VALUES
    ($1, $2, $3, $4, $5, $6)
    RETURNING id, email, first_name, last_name, username, birthday;
  `;
  const params = [
    user.email,
    user.hashedPassword,
    user.first_name,
    user.last_name,
    user.username,
    user.birthday,
  ];
  const response = await db.query(query, params);
  return response.rows[0];
}

export async function getUserByEmail(email) {
  const db = getDB();
  const query = `
    SELECT * FROM user_account
    WHERE email = $1;
  `;
  const response = await db.query(query, [email]);
  return response.rows[0];
}

export async function getUserById(id) {
  const db = getDB();
  const query = `
    SELECT * FROM user_account
    WHERE id = $1;
  `;
  const response = await db.query(query, [id]);
  return response.rows[0];
}
