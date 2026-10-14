export default function Contact() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            联系我们
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            这是一个演示页面。只要在{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              app/contact/page.tsx
            </code>{" "}
            写好这个文件，路由 /contact 就自动生成，并在顶部导航栏出现"联系"链接。
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
