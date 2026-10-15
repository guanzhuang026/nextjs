import Link from "next/link";
import SearchBar from "./SearchBar";

// 顶部导航：把 SearchBar 和 Link 这两个小组件「组合」进来。
// 教程里写的是 React Router 的 <Link to="/docs">，
// 在 Next.js 里要用 <Link href="/docs"> 才生效。
export default function NavigationHeader() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-3">
      <nav className="flex gap-4">
        <Link href="/first-component" className="text-blue-600 hover:underline">
          文档
        </Link>
      </nav>
      <SearchBar />
    </header>
  );
}
