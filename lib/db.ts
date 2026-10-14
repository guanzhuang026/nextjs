import mysql from "mysql2/promise";

// 连接池：配置从 .env.local 读取，没填就用本地默认值
export const pool = mysql.createPool({
  host: process.env.DB_HOST ?? "127.0.0.1",
  port: Number(process.env.DB_PORT ?? 3306),
  user: process.env.DB_USER ?? "root",
  password: process.env.DB_PASSWORD ?? "",
  database: process.env.DB_NAME ?? "next_learning",
  connectionLimit: 10,
  charset: "utf8mb4",
});

export type Post = {
  id: number;
  slug: string;
  title: string;
  content: string;
  author: string;
  created_at: string;
};

export async function getPost(slug: string): Promise<Post | undefined> {
  const [rows] = await pool.query(
    "SELECT id, slug, title, content, author, created_at FROM posts WHERE slug = ?",
    [slug]
  );
  return (rows as Post[])[0];
}

export async function getAllPosts(): Promise<Post[]> {
  const [rows] = await pool.query(
    "SELECT id, slug, title, author, created_at FROM posts ORDER BY id"
  );
  return rows as Post[];
}
