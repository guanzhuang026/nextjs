import {
  NamedHandlerButton,
  InlineNamedButton,
  InlineArrowButton,
} from "@/components/EventButtons";

// 本页是服务端组件（没有 'use client'），它只是把下面三个
// 客户端组件渲染出来——'use client' 的边界在 EventButtons.tsx 文件上。
export default function EventHandlersPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 p-8">
      <h1 className="text-2xl font-bold text-gray-800">
        响应事件：三种等价的写法
      </h1>
      <p className="text-sm text-gray-500">
        下面三个按钮分别用「命名函数 / 内联命名函数 / 内联箭头函数」实现，
        点击后弹出的内容一模一样——三种写法完全等效，按场景选就行。
      </p>

      <section className="flex flex-wrap gap-4 rounded bg-white p-4">
        <NamedHandlerButton />
        <InlineNamedButton />
        <InlineArrowButton />
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-gray-600">
          三种写法对应的代码
        </h2>
        <pre className="overflow-x-auto rounded bg-gray-50 p-4 text-xs leading-6">
{`// 写法 1：命名函数（逻辑稍长时最清晰，便于复用/测试）
function handleClick() {
  alert('你点击了我！');
}
<button onClick={handleClick}>点我</button>

// 写法 2：内联命名函数
<button onClick={function handleClick() {
  alert('你点击了我！');
}}>点我</button>

// 写法 3：内联箭头函数（函数体短时最方便）
<button onClick={() => {
  alert('你点击了我！');
}}>点我</button>`}
        </pre>
      </section>

      <section className="rounded border border-red-200 bg-red-50 p-4">
        <h2 className="mb-2 text-sm font-semibold text-red-700">
          {"⚠️ 新手最常见的坑：onClick={handleClick()} 加了括号"}
        </h2>
        <pre className="overflow-x-auto rounded bg-white p-3 text-xs leading-6">
{`// ❌ 错误：加了括号，等于"把函数执行的结果"传给 onClick
//    渲染时函数就被调用（页面一加载就弹 alert），
//    而且拿到的是 alert 的返回值 undefined，点击反而没反应。
<button onClick={handleClick()}>点我</button>

// ✅ 正确：不加括号，传的是"函数本身"，
//    等用户真正点击时，React 才替你调用它。
<button onClick={handleClick}>点我</button>`}
        </pre>
      </section>

      <p className="text-xs text-gray-400">
        小知识：为什么这些组件要写 {"'use client'"}？因为点击事件发生在用户的浏览器里，
        需要组件能在客户端运行。上面的页面本身是服务端组件，
        交互逻辑全部隔离在 EventButtons.tsx 这个客户端文件里。
      </p>
    </main>
  );
}
