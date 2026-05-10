import { query } from '../config/database';
import { User } from '../types/index';
import { v4 as uuidv4 } from 'uuid';

export class UserModel {
  static async findById(userId: string): Promise<User | null> {
    const result = await query(
      'SELECT * FROM users WHERE id = $1',
      [userId]
    );
    return result.rows[0] || null;
  }

  static async findByEmail(email: string): Promise<User | null> {
    const result = await query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    return result.rows[0] || null;
  }

  static async create(userData: Partial<User>): Promise<User> {
    const id = uuidv4();
    const now = new Date();

    const result = await query(
      `INSERT INTO users (id, email, password, firstName, lastName, role, isActive, createdAt, updatedAt)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
      [
        id,
        userData.email,
        userData.password,
        userData.firstName,
        userData.lastName,
        userData.role || 'user',
        true,
        now,
        now,
      ]
    );

    return result.rows[0];
  }

  static async update(userId: string, updates: Partial<User>): Promise<User | null> {
    const fields: string[] = [];
    const values: any[] = [];
    let paramCount = 1;

    Object.entries(updates).forEach(([key, value]) => {
      if (key !== 'id' && key !== 'createdAt') {
        fields.push(`${key} = $${paramCount}`);
        values.push(value);
        paramCount++;
      }
    });

    fields.push(`updatedAt = $${paramCount}`);
    values.push(new Date());

    values.push(userId);

    const result = await query(
      `UPDATE users SET ${fields.join(', ')} WHERE id = $${paramCount + 1} RETURNING *`,
      values
    );

    return result.rows[0] || null;
  }

  static async delete(userId: string): Promise<boolean> {
    const result = await query(
      'DELETE FROM users WHERE id = $1',
      [userId]
    );
    return result.rowCount! > 0;
  }

  static async list(limit = 10, offset = 0): Promise<{ users: User[]; total: number }> {
    const countResult = await query('SELECT COUNT(*) FROM users');
    const usersResult = await query(
      'SELECT * FROM users ORDER BY createdAt DESC LIMIT $1 OFFSET $2',
      [limit, offset]
    );

    return {
      users: usersResult.rows,
      total: parseInt(countResult.rows[0].count),
    };
  }
}
