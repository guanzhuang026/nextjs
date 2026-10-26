import type { ReactNode } from "react";
import { FancyText } from "./FancyText";

// InspirationGenerator：一个"包装盒"组件。
// 它自己渲染一个 FancyText（励志语正文），
// 同时通过 children 接收父组件传进来的内容（这里是 <Copyright />）。
export function InspirationGenerator({ children }: { children: ReactNode }) {
  return (
    <section className="space-y-2 rounded-lg border border-gray-200 p-4 shadow-sm">
      {/* 它自己直接渲染的节点：FancyText */}
      <FancyText text="千里之行，始于足下。—— 《老子》" color="teal" />
      {/* 父组件通过 children 传进来的节点：Copyright */}
      {children}
    </section>
  );
}
