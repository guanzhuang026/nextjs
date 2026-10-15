import type { ReactNode } from "react";

// 内容区：同样用 children 接收「页面主体内容」，
// 这里传进来的是 <TableOfContents /> 和 <DocumentationText />。
export default function PageContent({ children }: { children: ReactNode }) {
  return <main className="flex-1 p-6">{children}</main>;
}
