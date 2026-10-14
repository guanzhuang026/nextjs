// app/csr-posts/page.tsx 对应访问路径 /csr-posts
// CSR（客户端渲染）：标记 'use client'，组件在浏览器端运行。
// 数据获取（fetch）和页面渲染都发生在浏览器里，而非服务端。
//
// 注意：教程原代码在 JSX 里写了 `// 客户端交互组件...` 这种行注释，
// 在 JSX 中行注释非法会导致编译报错，这里已修正为 {/* ... */}。

'use client'; // 标记为客户端组件，强制开启 CSR 客户端渲染

import { useState, useEffect } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function CSRPostsPage() {
  // 客户端维护状态，用于交互和数据展示
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchKey, setSearchKey] = useState(''); // 客户端交互状态（搜索）

  // 客户端数据获取，在浏览器端执行
  const fetchPosts = async () => {
    setLoading(true);
    try {
      // 客户端请求 API，可根据交互状态（如搜索关键词）动态调整请求参数
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${searchKey}`);
      if (!res.ok) throw new Error('数据获取失败');
      const data = await res.json();
      setPosts(data.slice(0, 10)); // 截取前10条数据
    } catch (err) {
      console.error('客户端请求失败', err);
    } finally {
      setLoading(false);
    }
  };

  // 组件挂载时获取初始数据，搜索关键词变化时重新获取数据
  useEffect(() => {
    fetchPosts();
  }, [searchKey]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">CSR客户端渲染文章列表</h1>
      <p className="mb-6 text-gray-500">
        本页面在浏览器端渲染，数据获取和页面更新均在客户端完成
      </p>

      {/* 客户端交互组件（搜索框），体现 CSR 交互优势 */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="输入关键词搜索文章..."
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm"
        />
      </div>

      {loading ? (
        <div className="p-6 text-center">加载中...</div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="border rounded-lg p-4 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.body.substring(0, 100)}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
