import { getPost } from "@/lib/db";
import Link from "next/link";

// 读实时 MySQL + 用 [slug] 动态参数，必须动态渲染（每次请求现查）
// Next 16 cacheComponents 模式下改用 instant = false（阻塞式动态路由）
export const instant = false;

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // [slug] 里的 [] 表示"可变参数"；Next 16 里 params 是 Promise，必须 await
  const { slug } = await params;
  // 用 slug 去 MySQL 查这一篇的真实数据
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black">
          <h1 className="text-3xl font-semibibold text-black dark:text-zinc-50">文章不存在</h1>
          <Link
            className="mt-6 font-medium text-zinc-950 underline dark:text-zinc-50"
            href="/blog"
          >
            返回博客列表
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <article className="flex flex-col gap-6 text-center sm:text-left">
          <h1 className="max-w-xl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {post.title}
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {post.content}
          </p>
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            作者：{post.author} ｜ 发布时间：{post.created_at}
          </div>
          <Link
            className="font-medium text-zinc-950 underline dark:text-zinc-50"
            href="/blog"
          >
            返回博客列表
          </Link>
        </article>
      </main>
    </div>
  );
}
