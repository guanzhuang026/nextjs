// 侧边栏：静态导航列表，演示「组件可以只是普通标记的组合」。
export default function Sidebar() {
  return (
    <aside className="w-48 shrink-0 border-r bg-white p-4">
      <nav className="flex flex-col gap-2 text-sm text-gray-700">
        <a href="#" className="hover:text-blue-600">
          入门
        </a>
        <a href="#" className="hover:text-blue-600">
          组件
        </a>
        <a href="#" className="hover:text-blue-600">
          状态
        </a>
      </nav>
    </aside>
  );
}
