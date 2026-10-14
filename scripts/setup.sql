-- 1) 建库（不存在才建）
CREATE DATABASE IF NOT EXISTS next_learning CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE next_learning;

-- 2) 建表
CREATE TABLE IF NOT EXISTS posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(50) NOT NULL UNIQUE,
  title VARCHAR(200) NOT NULL,
  content TEXT NOT NULL,
  author VARCHAR(50) NOT NULL,
  created_at VARCHAR(20) NOT NULL
);

-- 3) 灌入真实数据（重复执行不会报错）
INSERT INTO posts (slug, title, content, author, created_at) VALUES
('1', '第一篇文章', '这是从 MySQL 数据库读取到的真实内容，不是内存里的假数据。', '张三', '2026-01-10'),
('2', 'Next.js 动态路由入门', '动态路由让一个页面模板服务无数条数据，按 slug 取内容。', '李四', '2026-02-15'),
('3', '为什么需要数据库', '把内容存进 MySQL，页面按 slug 取数据，加文章不用改代码、不用重新部署。', '王五', '2026-03-20')
ON DUPLICATE KEY UPDATE
  title = VALUES(title),
  content = VALUES(content),
  author = VALUES(author),
  created_at = VALUES(created_at);
