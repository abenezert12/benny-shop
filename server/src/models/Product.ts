import { query } from '../config/database';
import { Product } from '../types/index';
import { v4 as uuidv4 } from 'uuid';

export class ProductModel {
  static async findById(productId: string): Promise<Product | null> {
    const result = await query(
      'SELECT * FROM products WHERE id = $1',
      [productId]
    );
    return result.rows[0] || null;
  }

  static async findBySku(sku: string): Promise<Product | null> {
    const result = await query(
      'SELECT * FROM products WHERE sku = $1',
      [sku]
    );
    return result.rows[0] || null;
  }

  static async create(productData: Partial<Product>): Promise<Product> {
    const id = uuidv4();
    const now = new Date();

    const result = await query(
      `INSERT INTO products (id, name, description, price, stock, sku, category, isActive, rating, reviewCount, createdAt, updatedAt)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
       RETURNING *`,
      [
        id,
        productData.name,
        productData.description,
        productData.price,
        productData.stock,
        productData.sku,
        productData.category,
        true,
        0,
        0,
        now,
        now,
      ]
    );

    return result.rows[0];
  }

  static async update(productId: string, updates: Partial<Product>): Promise<Product | null> {
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

    values.push(productId);

    const result = await query(
      `UPDATE products SET ${fields.join(', ')} WHERE id = $${paramCount} RETURNING *`,
      values
    );

    return result.rows[0] || null;
  }

  static async delete(productId: string): Promise<boolean> {
    const result = await query(
      'DELETE FROM products WHERE id = $1',
      [productId]
    );
    return result.rowCount! > 0;
  }

  static async list(limit = 10, offset = 0): Promise<{ products: Product[]; total: number }> {
    const countResult = await query('SELECT COUNT(*) FROM products WHERE isActive = true');
    const productsResult = await query(
      'SELECT * FROM products WHERE isActive = true ORDER BY createdAt DESC LIMIT $1 OFFSET $2',
      [limit, offset]
    );

    return {
      products: productsResult.rows,
      total: parseInt(countResult.rows[0].count),
    };
  }

  static async listByCategory(category: string, limit = 10, offset = 0): Promise<{ products: Product[]; total: number }> {
    const countResult = await query(
      'SELECT COUNT(*) FROM products WHERE category = $1 AND isActive = true',
      [category]
    );
    const productsResult = await query(
      'SELECT * FROM products WHERE category = $1 AND isActive = true ORDER BY createdAt DESC LIMIT $2 OFFSET $3',
      [category, limit, offset]
    );

    return {
      products: productsResult.rows,
      total: parseInt(countResult.rows[0].count),
    };
  }

  static async search(searchTerm: string, limit = 10, offset = 0): Promise<{ products: Product[]; total: number }> {
    const countResult = await query(
      'SELECT COUNT(*) FROM products WHERE (name ILIKE $1 OR description ILIKE $1) AND isActive = true',
      [`%${searchTerm}%`]
    );
    const productsResult = await query(
      'SELECT * FROM products WHERE (name ILIKE $1 OR description ILIKE $1) AND isActive = true ORDER BY createdAt DESC LIMIT $2 OFFSET $3',
      [`%${searchTerm}%`, limit, offset]
    );

    return {
      products: productsResult.rows,
      total: parseInt(countResult.rows[0].count),
    };
  }
}
