// app/isr-posts/page.tsx 对应访问路径 /isr-posts
//
// ISR（增量静态再生成 / Incremental Static Regeneration）
// ------------------------------------------------------------------
// 目标：页面既要"静态的速度"（构建时/首次算好一份缓存），又要"定期更新"
//       （过一段时间自动重新拉数据、刷新缓存）。
//
// Next 16 在 cacheComponents 模式下，旧的页面级配置：
//     export const revalidate = 60;        ❌ 已被禁用
// 会报 "not compatible with nextConfig.cacheComponents"。
// 正确写法是改用新的 `use cache` 指令 + `cacheLife({ revalidate })`，
// 这是 Next 16 的"新 ISR" API。
//
// 行为：
//   - 首次访问把数据算好并缓存成静态（和 SSG 一样快）。
//   - 60 秒内的请求直接返回这份缓存；超过 60 秒后首次访问会触发后台重算，
//     重算期间仍先返回旧内容（stale-while-revalidate），用户无感知。
//   - expire 是兜底上限：超过后强制失效，必须重算。

import { cacheLife } from 'next/cache';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// `use cache` 指令：把"这个函数的结果"缓存起来——这是 Next 16 的缓存/ISR 写法。
// 注意：指令必须写在函数体最顶部（字符串字面量）。
async function getISRPosts(): Promise<Post[]> {
  'use cache';
  // 60 秒后才允许后台重算；最多缓存 1 小时（expire 之后强制失效重算）
  cacheLife({ revalidate: 60, expire: 3600 });
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  if (!res.ok) throw new Error('数据获取失败');
  return res.json();
}

// 页面组件（Server Component，直接 await 缓存函数）
export default async function ISRPostsPage() {
  const posts = await getISRPosts();
  // 页面生成时间，用来肉眼验证"缓存是否在 60 秒后才更新"
  const generateTime = new Date().toLocaleString();
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">ISR增量静态更新文章列表</h1>
      <p className="mb-6 text-gray-500">
        本页面每 60 秒在后台自动更新一次（ISR），当前页面生成时间：{generateTime}
      </p>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
