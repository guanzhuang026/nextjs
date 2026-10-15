// 你的第一个组件：把一段固定的 HTML 标记，封装成一个「可复用的 UI 组件」。
// 以后在任意页面写 <TableOfContents /> 就能渲染这份目录，不用复制粘贴 HTML。
export default function TableOfContents() {
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">我的第一个组件</h1>
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        <li>组件：UI 构成要素</li>
        <li>定义组件</li>
        <li>使用组件</li>
      </ol>
    </article>
  );
}
