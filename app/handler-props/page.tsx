import Toolbar from "@/components/Toolbar";

// 最简示例页：只渲染一个 <Toolbar />，点两个按钮效果不同。
export default function HandlerPropsPage() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-6 text-xl font-bold text-gray-800">
        将事件处理函数作为 props 传递
      </h1>
      <Toolbar />
    </main>
  );
}
