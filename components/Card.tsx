import type { ReactNode } from "react";

// Card 是一个「视觉包装」组件：它自己不关心里面放什么，
// 只通过 children 这个特殊 prop，接收父组件夹在 <Card>...</Card> 之间的内容。
export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="card rounded-lg border border-gray-200 p-4 shadow-sm">
      {children}
    </div>
  );
}
