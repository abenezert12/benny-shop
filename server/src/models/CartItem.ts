import { query } from '../config/database';
import { CartItem } from '../types/index';
import { v4 as uuidv4 } from 'uuid';

export class CartItemModel {
  static async findById(cartItemId: string): Promise<CartItem | null> {
    const result = await query(
      'SELECT * FROM cartItems WHERE id = $1',
      [cartItemId]
    );
    return result.rows[0] || null;
  }

  static async findByUserId(userId: string): Promise<CartItem[]> {
    const result = await query(
      'SELECT * FROM cartItems WHERE userId = $1 ORDER BY addedAt DESC',
      [userId]
    );
    return result.rows;
  }

  static async findByUserAndProduct(userId: string, productId: string): Promise<CartItem | null> {
    const result = await query(
      'SELECT * FROM cartItems WHERE userId = $1 AND productId = $2',
      [userId, productId]
    );
    return result.rows[0] || null;
  }

  static async create(cartData: Partial<CartItem>): Promise<CartItem> {
    const id = uuidv4();
    const now = new Date();

    const result = await query(
      `INSERT INTO cartItems (id, userId, productId, quantity, addedAt)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [
        id,
        cartData.userId,
        cartData.productId,
        cartData.quantity,
        now,
      ]
    );

    return result.rows[0];
  }

  static async update(cartItemId: string, quantity: number): Promise<CartItem | null> {
    const result = await query(
      'UPDATE cartItems SET quantity = $1 WHERE id = $2 RETURNING *',
      [quantity, cartItemId]
    );

    return result.rows[0] || null;
  }

  static async delete(cartItemId: string): Promise<boolean> {
    const result = await query(
      'DELETE FROM cartItems WHERE id = $1',
      [cartItemId]
    );
    return result.rowCount! > 0;
  }

  static async deleteByUserId(userId: string): Promise<boolean> {
    const result = await query(
      'DELETE FROM cartItems WHERE userId = $1',
      [userId]
    );
    return result.rowCount! > 0;
  }

  static async getCartSummary(userId: string): Promise<{ items: any[]; total: number; count: number }> {
    const result = await query(
      `SELECT ci.*, p.price, p.name 
       FROM cartItems ci 
       JOIN products p ON ci.productId = p.id 
       WHERE ci.userId = $1`,
      [userId]
    );

    const total = result.rows.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return {
      items: result.rows,
      total,
      count: result.rows.length,
    };
  }
}
