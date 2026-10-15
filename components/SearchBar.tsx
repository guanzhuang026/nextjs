// 搜索框组件：一个独立、可复用的小 UI 单元。
// 这里只是静态展示（没有交互逻辑）；以后要真正搜索时，
// 再给它加状态、标 'use client' 即可。
export default function SearchBar() {
  return (
    <input
      type="search"
      placeholder="搜索..."
      className="rounded border px-3 py-1 text-sm"
    />
  );
}
