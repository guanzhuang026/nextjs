// app/blog-static/page.tsx 对应访问路径 /blog-static
// 这是「博客列表」的 SSG 静态版演示：和 /blog 是同一个列表页面，
// 但渲染策略相反——本页在 npm run build 时把数据烤进 HTML，部署后不再查库。
//
// 重要前提（也是 Next 16 的核心约束）：
// 要让页面被预渲染成静态，数据必须来自「可缓存的渠道」。
// mysql2 直连数据库属于运行时连接（connection()），Next 16 不允许把它预渲染成静态，
// 所以 /blog（读实时 MySQL）只能走动态。本页改用 fetch（默认 force-cache，
// 构建时拉一次后永久缓存）来取数，才能变成 ○ Static。
// 真实项目若想让 MySQL 列表变静态，应把数据通过可缓存的接口 / CMS 提供，而非 mysql2 直连。

interface StaticPost {
  id: number;
  title: string;
  body: string;
}

// 构建时执行一次数据获取，结果永久缓存 → 页面被预渲染成静态 HTML
async function getStaticBlogList(): Promise<StaticPost[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  if (!res.ok) throw new Error("数据获取失败");
  return res.json();
}

export default async function BlogStaticPage() {
  const posts = await getStaticBlogList();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex w-full flex-col gap-4">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
            博客列表（SSG 静态版）
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            本页在 npm run build 时把数据烤进 HTML，部署后不再查库。数据库新增文章需重新 build 才会出现。
          </p>
          <ul className="flex flex-col gap-3">
            {posts.map((p) => (
              <li key={p.id} className="flex flex-col gap-1">
                <span className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
                  {p.title}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {p.body.slice(0, 60)}…
                </span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
