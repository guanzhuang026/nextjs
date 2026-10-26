"use client";

// 本文件演示 react.dev「事件处理」一节的三种等价写法。
// 三种方式效果完全一样：点击后都会 alert('你点击了我！')。
// 命名约定：处理函数通常以 handle 开头，后接事件名，如 handleClick、handleMouseEnter。

// 写法 1（教程推荐）：在组件内部定义命名函数，再把函数名传给 onClick。
// 注意：传的是「函数本身」handleClick，不能加括号——加了就变成"把执行结果传进去"。
export function NamedHandlerButton() {
  function handleClick() {
    alert("你点击了我！（写法 1：命名函数）");
  }
  return (
    <button
      onClick={handleClick}
      className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
    >
      写法 1：命名函数 handleClick
    </button>
  );
}

// 写法 2：把命名函数直接内联写在 JSX 里（函数名在这里只是个标签，没人调用它）。
export function InlineNamedButton() {
  return (
    <button
      onClick={function handleClick() {
        alert("你点击了我！（写法 2：内联命名函数）");
      }}
      className="rounded bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
    >
      写法 2：内联命名函数
    </button>
  );
}

// 写法 3：内联箭头函数——函数体较短时最方便，日常见得最多。
export function InlineArrowButton() {
  return (
    <button
      onClick={() => {
        alert("你点击了我！（写法 3：箭头函数）");
      }}
      className="rounded bg-purple-500 px-4 py-2 text-white transition-colors hover:bg-purple-600"
    >
      写法 3：内联箭头函数
    </button>
  );
}
