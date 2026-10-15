// jsx-root/page.tsx
// 演示 JSX 规则①：用 { } 具名导入两种写法并对比
import { TodoWithDiv, TodoWithFragment } from "@/components/HedyTodo";
import Link from "next/link";

export default function JsxRootPage() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        JSX 规则①：组件只能返回一个根元素
      </h1>

      {/* ----- 解法 1：<div> 包裹 ----- */}
      <section className="mb-8">
        <h2 className="mb-2 text-lg font-semibold text-gray-700">
          解法 1：用 &lt;div&gt; 包裹
        </h2>
        <p className="mb-2 text-sm text-gray-500">
          下面这块内容外面多了一层带蓝色边框的 &lt;div&gt;（边框是我特意加的，方便你看到这个「多余的包裹层」）。
        </p>
        <TodoWithDiv />
      </section>

      {/* ----- 解法 2：Fragment 包裹 ----- */}
      <section className="mb-8">
        <h2 className="mb-2 text-lg font-semibold text-gray-700">
          解法 2：用 &lt;&gt; Fragment 包裹
        </h2>
        <p className="mb-2 text-sm text-gray-500">
          下面这块没有额外边框——因为 Fragment 不产生真实 DOM 节点，h1/img/ul 直接挂到我这个 section 下。
        </p>
        <TodoWithFragment />
      </section>

      {/* ----- 反例说明 ----- */}
      <section className="mb-8 rounded bg-amber-50 p-4 text-sm text-amber-800">
        <h2 className="mb-1 font-semibold">如果「不包裹」会怎样？</h2>
        <p>
          如果一个组件直接 <code>return ( &lt;h1&gt;...&lt;/h1&gt; &lt;img/&gt; &lt;ul&gt;...&lt;/ul&gt; )</code>
          ，也就是多个平级元素没有根包住，JSX 会报语法错误（Adjacent JSX elements must be wrapped in an enclosing tag）。
          所以必须二选一：要么用 &lt;div&gt;，要么用 &lt;&gt;。
        </p>
      </section>

      <Link href="/cardkit-demo" className="text-sm text-blue-600 hover:underline">
        ← 返回具名导出示例
      </Link>
    </main>
  );
}
