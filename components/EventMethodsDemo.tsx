"use client";

// 简单示例：e.stopPropagation() vs e.preventDefault()，两者互不相干。
export default function EventMethodsDemo() {
  return (
    <div className="space-y-12">
      {/* ========== 第一部分：stopPropagation ========== */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-gray-800">
          ① e.stopPropagation() —— 阻止事件"冒泡"到外层
        </h2>
        <p className="text-sm text-gray-500">
          点击事件会从最内层元素开始，一层层往外传（冒泡）。
          点内层按钮时，外层容器的 onClick 也会被触发。
        </p>

        {/* 没有 stopPropagation：内层点完，外层跟着响 */}
        <div
          onClick={() => alert("【外层容器】被点击了（冒泡上来的）")}
          className="cursor-pointer rounded border-2 border-red-300 bg-red-50 p-4"
        >
          <p className="mb-2 text-xs text-red-600">外层容器（有 onClick）</p>
          <button
            onClick={() => alert("【内层按钮】被点击")}
            className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            点我（不拦，会冒泡）
          </button>
          <p className="mt-2 text-xs text-gray-500">
            效果：点按钮会弹两次——先内层、后外层。
          </p>
        </div>

        {/* 有 stopPropagation：只响内层 */}
        <div
          onClick={() => alert("【外层容器】被点击了")}
          className="cursor-pointer rounded border-2 border-green-300 bg-green-50 p-4"
        >
          <p className="mb-2 text-xs text-green-600">外层容器（有 onClick）</p>
          <button
            onClick={(e) => {
              e.stopPropagation(); // 拦住冒泡，外层不会收到这个事件
              alert("【内层按钮】被点击，外层不会响");
            }}
            className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            点我（stopPropagation 拦下）
          </button>
          <p className="mt-2 text-xs text-gray-500">
            效果：点按钮只弹一次——外层被 e.stopPropagation() 挡住了。
          </p>
        </div>
      </section>

      {/* ========== 第二部分：preventDefault ========== */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-gray-800">
          ② e.preventDefault() —— 阻止浏览器"默认行为"
        </h2>
        <p className="text-sm text-gray-500">
          表单提交的默认行为是"刷新页面并跳转"。
          在 onSubmit 里调用 e.preventDefault() 就能拦住它。
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault(); // 没有这行，点提交会整页刷新
            alert("表单提交了，但页面没有刷新（默认行为被 e.preventDefault() 阻止）");
          }}
          className="space-y-3 rounded border-2 border-blue-300 bg-blue-50 p-4"
        >
          <p className="text-xs text-blue-600">表单（有 onSubmit）</p>
          <input
            type="text"
            placeholder="输入点什么"
            className="rounded border border-gray-300 px-3 py-2"
          />
          <button
            type="submit"
            className="ml-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            提交
          </button>
          <p className="text-xs text-gray-500">
            效果：点提交只弹一次提示，页面不刷新、不清空输入框。
          </p>
        </form>
      </section>

      {/* ========== 对比小结 ========== */}
      <section className="rounded bg-gray-50 p-4">
        <h2 className="mb-2 text-sm font-semibold text-gray-600">对比小结</h2>
        <pre className="overflow-x-auto rounded bg-white p-3 text-xs leading-6">
{`e.stopPropagation()  阻止【事件继续往外层标签传】→ 外层 onClick 不触发
e.preventDefault()   阻止【浏览器对某些事件的默认动作】→ 表单不刷新/链接不跳转

两者毫无关系：一个管 React 里的事件传播，一个管浏览器自身行为。`}
        </pre>
      </section>
    </div>
  );
}
