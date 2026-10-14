export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // [slug] 文件夹名里的 [] 表示"这一段是可变参数"，
  // 访问 /blog/1、/blog/abc 时，slug 分别是 "1"、"abc"。
  // Next 16 里 params 是 Promise，必须 await。
  const { slug } = await params;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            博客文章
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            这是动态路由示例。当前网址里的可变参数是：
          </p>
          <code className="rounded bg-black/[.06] px-3 py-2 font-mono text-base text-black dark:bg-white/[.08] dark:text-zinc-50">
            slug = {slug}
          </code>
          <p className="max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
            访问 /blog/1、/blog/abc、/blog/任意值 都会打开这个页面，只是 slug
            的值不同。
          </p>
          <a
            className="font-medium text-zinc-950 underline dark:text-zinc-50"
            href="/"
          >
            返回首页
          </a>
        </div>
      </main>
    </div>
  );
}
