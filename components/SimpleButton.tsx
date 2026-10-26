"use client";

// 这就是你发的代码：一个 Button 组件，点击后弹出 alert。
// 三个要点都在注释里：
// 1. handleClick 定义在组件内部；
// 2. 名字以 handle 开头，后接事件名；
// 3. onClick={handleClick} 传的是「函数本身」，不能加括号。
export default function Button() {
  function handleClick() {
    alert("你点击了我！");
  }

  return (
    <button
      onClick={handleClick}
      className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
    >
      点我
    </button>
  );
}
