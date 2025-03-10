const db = require('../connection.js')

class CvsModel{
  static async createUser(name, email, phone, summary, experience, education) {
    try {
      const result = await db.query('INSERT INTO users (name, email, phone , summary, experience, education) VALUES (?, ?, ? , ?, ?, ?)', [name, email, phone, summary, experience, education]);
      return result.insertId; // Return the new user ID
    } catch (error) {
      throw error;
    }
  }
  static async getUser(userId) {
    try {
      const sql = `SELECT id, name, email, phone, summary, experience, education FROM users WHERE id = ?`;
      
      const [rows] = await db.query(sql, [userId]);
      
      if (rows.length === 0) {
        return null; // No user found
      }
      const user = rows;
      console.log(user);
      

      // Parse experience and education from JSON
      user.experience = JSON.parse(user.experience);
      user.education = JSON.parse(user.education);

      return user;
    } catch (error) {
      throw error;
    }
  }
  static async getAllUsers() {
    try {
      const sql = `SELECT id, name, email, phone, summary, experience, education, created_at FROM users`;
      
      const rows = await db.query(sql);
      
      if (rows.length === 0) {
        return null; // No user found
      }
      const user = rows;
      console.log(user);

      return user;
    } catch (error) {
      throw error;
    }
  }
  static async updateUser(id, name, email, phone, summary, experience, education) {
    try {
      const result = await db.query(
        'UPDATE users SET name = ?, email = ?, phone = ?, summary = ?, experience = ?, education = ? WHERE id = ?',
        [name, email, phone, summary, experience, education, id]
      );

      return result.affectedRows; // Returns the number of updated rows
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CvsModel