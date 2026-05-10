import { query } from '../config/database';
import { Order, OrderItem } from '../types/index';
import { v4 as uuidv4 } from 'uuid';

export class OrderModel {
  static async findById(orderId: string): Promise<Order | null> {
    const result = await query(
      'SELECT * FROM orders WHERE id = $1',
      [orderId]
    );
    return result.rows[0] || null;
  }

  static async findByUserId(userId: string, limit = 10, offset = 0): Promise<{ orders: Order[]; total: number }> {
    const countResult = await query(
      'SELECT COUNT(*) FROM orders WHERE userId = $1',
      [userId]
    );
    const ordersResult = await query(
      'SELECT * FROM orders WHERE userId = $1 ORDER BY createdAt DESC LIMIT $2 OFFSET $3',
      [userId, limit, offset]
    );

    return {
      orders: ordersResult.rows,
      total: parseInt(countResult.rows[0].count),
    };
  }

  static async create(orderData: Partial<Order>): Promise<Order> {
    const id = uuidv4();
    const now = new Date();

    const result = await query(
      `INSERT INTO orders (id, userId, status, totalAmount, discountAmount, taxAmount, shippingAmount, finalAmount, paymentStatus, shippingAddress, createdAt, updatedAt)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
       RETURNING *`,
      [
        id,
        orderData.userId,
        'pending',
        orderData.totalAmount,
        orderData.discountAmount || 0,
        orderData.taxAmount || 0,
        orderData.shippingAmount || 0,
        orderData.finalAmount,
        'pending',
        orderData.shippingAddress,
        now,
        now,
      ]
    );

    return result.rows[0];
  }

  static async update(orderId: string, updates: Partial<Order>): Promise<Order | null> {
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
    paramCount++;

    values.push(orderId);

    const result = await query(
      `UPDATE orders SET ${fields.join(', ')} WHERE id = $${paramCount} RETURNING *`,
      values
    );

    return result.rows[0] || null;
  }

  static async delete(orderId: string): Promise<boolean> {
    await query('DELETE FROM orderItems WHERE orderId = $1', [orderId]);
    const result = await query('DELETE FROM orders WHERE id = $1', [orderId]);
    return result.rowCount! > 0;
  }

  static async list(limit = 10, offset = 0): Promise<{ orders: Order[]; total: number }> {
    const countResult = await query('SELECT COUNT(*) FROM orders');
    const ordersResult = await query(
      'SELECT * FROM orders ORDER BY createdAt DESC LIMIT $1 OFFSET $2',
      [limit, offset]
    );

    return {
      orders: ordersResult.rows,
      total: parseInt(countResult.rows[0].count),
    };
  }
}

export class OrderItemModel {
  static async findByOrderId(orderId: string): Promise<OrderItem[]> {
    const result = await query(
      'SELECT * FROM orderItems WHERE orderId = $1',
      [orderId]
    );
    return result.rows;
  }

  static async create(itemData: Partial<OrderItem>): Promise<OrderItem> {
    const id = uuidv4();
    const now = new Date();

    const result = await query(
      `INSERT INTO orderItems (id, orderId, productId, quantity, price, createdAt)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [
        id,
        itemData.orderId,
        itemData.productId,
        itemData.quantity,
        itemData.price,
        now,
      ]
    );

    return result.rows[0];
  }

  static async deleteByOrderId(orderId: string): Promise<boolean> {
    const result = await query(
      'DELETE FROM orderItems WHERE orderId = $1',
      [orderId]
    );
    return result.rowCount! > 0;
  }
}
