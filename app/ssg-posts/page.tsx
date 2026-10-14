// app/ssg-posts/page.tsx 对应访问路径 /ssg-posts
// 无任何强制动态配置，Next.js默认使用SSG静态生成
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// 构建时执行数据获取，生成静态页面
async function getStaticPosts(): Promise<Post[]> {
  // fetch默认开启强制缓存，构建时拉取数据后永久缓存
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  if (!res.ok) throw new Error('数据获取失败');
  return res.json();
}

// 页面组件
export default async function SSGPostsPage() {
  // 构建时获取数据，前端访问直接返回预渲染的HTML
  const posts = await getStaticPosts();
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">SSG静态生成文章列表</h1>
      <p className="mb-6 text-gray-500">本页面在构建时预渲染，所有用户访问均返回静态HTML</p>
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
