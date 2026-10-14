// 一键初始化 MySQL：读取 scripts/setup.sql 并执行（建库 + 建表 + 灌真实数据）
// 用法：先在 .env.local 填好 DB_PASSWORD，然后 `node scripts/init-db.mjs`
import mysql from "mysql2/promise";
import fs from "node:fs";
import path from "node:path";

// 简单读取 .env.local（不引入额外依赖）
const envFile = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envFile)) {
  for (const line of fs.readFileSync(envFile, "utf8").split("\n")) {
    const m = line.match(/^\s*([\w]+)\s*=\s*(.*)\s*$/);
    if (m && !line.trim().startsWith("#")) process.env[m[1]] = m[2];
  }
}

const sql = fs.readFileSync(path.join(process.cwd(), "scripts", "setup.sql"), "utf8");

const conn = await mysql.createConnection({
  host: process.env.DB_HOST ?? "127.0.0.1",
  port: Number(process.env.DB_PORT ?? 3306),
  user: process.env.DB_USER ?? "root",
  password: process.env.DB_PASSWORD ?? "",
  multipleStatements: true, // 允许一次执行多句 SQL（建库/建表/插入）
});

await conn.query(sql);
console.log("✅ 数据库 next_learning 已初始化（库、posts 表、3 条真实数据已就绪）");
await conn.end();
