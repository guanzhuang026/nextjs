import type { ReactNode } from "react";

// 布局组件：用 children 把「任意内容」包进统一的页面外壳。
// children 是 React 的核心机制：父组件把内容作为属性传进来，这里原样渲染。
export default function PageLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-gray-50">{children}</div>;
}
