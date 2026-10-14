import { getAllPosts } from "@/lib/db";
import Link from "next/link";

// 这个页面读的是「实时 MySQL」，不能在构建时预渲染成静态
// Next 16 开启 cacheComponents 后禁用旧的 dynamic = "force-dynamic"
// 改用 instant = false：标记为阻塞式动态路由，每次请求现查数据库
export const instant = false;

export default async function BlogIndex() {
  // 从 MySQL 查出全部文章（只取列表需要的字段）
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex w-full flex-col gap-4">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
            博客列表（来自 MySQL）
          </h1>
          <ul className="flex flex-col gap-3">
            {posts.map((p) => (
              <li key={p.id} className="flex flex-col gap-1">
                <Link
                  className="text-lg font-medium text-zinc-950 underline dark:text-zinc-50"
                  href={`/blog/${p.slug}`}
                >
                  {p.title}
                </Link>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  作者：{p.author} ｜ {p.created_at}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
