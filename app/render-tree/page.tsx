import { FancyText } from "@/components/FancyText";
import { InspirationGenerator } from "@/components/InspirationGenerator";
import { Copyright } from "@/components/Copyright";

// 这个页面就是教程里的 App。
// 它把三个组件组合起来，形成一棵"渲染树"：
//
//   App（根组件）
//   ├── FancyText            ← App 直接渲染的大标题
//   └── InspirationGenerator
//       ├── FancyText        ← InspirationGenerator 自己渲染的励志语
//       └── Copyright        ← 父组件通过 children 传进来的版权行
//
// 注意：FancyText 在树里出现了两次——同一个组件，被复用在两个位置。
export default function RenderTreePage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 p-8">
      <h1 className="text-2xl font-bold text-gray-800">
        渲染树（Render Tree）示例
      </h1>

      {/* 上半部分：页面实际渲染出来的效果 */}
      <section className="space-y-4 rounded bg-white p-4">
        <h2 className="text-sm font-semibold text-gray-600">
          ① 实际渲染效果
        </h2>
        <FancyText text="Get Inspired App" />
        <InspirationGenerator>
          <Copyright year={2004} />
        </InspirationGenerator>
      </section>

      {/* 下半部分：上面这段代码对应的渲染树 */}
      <section className="rounded bg-gray-50 p-4">
        <h2 className="mb-3 text-sm font-semibold text-gray-600">
          ② 对应的渲染树（节点 = 组件，箭头 = renders）
        </h2>
        <pre className="overflow-x-auto rounded bg-white p-3 text-sm leading-7">
{`App                         ← 根组件（React 第一个渲染的组件）
├── FancyText                ← App 渲染的子组件（title）
└── InspirationGenerator     ← App 渲染的子组件
    ├── FancyText            ← InspirationGenerator 自己渲染的
    └── Copyright            ← 通过 children 传入的（year=2004）`}
        </pre>
        <p className="mt-3 text-xs text-gray-500">
          打开浏览器"检查"看真实 DOM 你会发现：DOM 里是 {"<h2>"}、
          {"<p>"}、{"<section>"} 这些标签，并没有一个叫 {"App"} 或
          {"FancyText"} 的标签——因为<strong>渲染树的节点是"组件"</strong>，
          不是"DOM 元素"。渲染树 ≠ DOM 树。
        </p>
      </section>
    </main>
  );
}
