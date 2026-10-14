// app/ssr-posts/page.tsx 对应访问路径 /ssr-posts
// SSR（服务端渲染）：每次用户请求，服务端都实时取数 + 渲染完整 HTML 再返回
// Next 16 开了 cacheComponents，需显式声明为阻塞式动态路由（instant = false），
// 这样才是"每次请求都在服务端完整渲染"，即标准 SSR 语义。

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const instant = false;

// 每次用户请求页面时，都会实时执行该函数拉取最新数据
async function getDynamicPosts(): Promise<Post[]> {
  // cache: 'no-store' 强制不缓存，每次请求都重新调用接口
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('数据获取失败');
  return res.json();
}

// 页面组件
export default async function SSRPostsPage() {
  // 每次请求都实时获取最新数据
  const posts = await getDynamicPosts();
  // 可获取当前请求时间，验证每次刷新都会更新
  const requestTime = new Date().toLocaleString();
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">SSR服务端渲染文章列表</h1>
      <p className="mb-6 text-gray-500">本页面每次刷新都会重新渲染，当前请求时间：{requestTime}</p>
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
