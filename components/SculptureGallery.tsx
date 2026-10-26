"use client";

// 修复版（对应你贴的雕塑示例）：把 index 交给 useState，让它成为"组件的记忆"。
// 注意：组件名用 SculptureGallery，因为 components/Gallery.tsx 已经被
// 更早的"提取组件"科学家示例占用了，这里不覆盖它。
import { useState } from "react";
import { sculptureList } from "./data";

export default function SculptureGallery() {
  // useState(0) 返回 [当前值, 修改函数]。
  // 当前值由 React 记住，每次渲染不会归零；
  // 调用修改函数时，React 会收到"值变了"的信号并自动重画。
  const [index, setIndex] = useState(0);// useState(0) 返回 [当前值, 修改函数]。

  function handleClick() {
    // ❌ 原代码是 index = index + 1（改普通变量，无效）
    // ✅ 改成调用 setIndex，告诉 React 更新这个值
    // 小保险：% sculptureList.length 让它到最后一项后回到第一项（循环），
    // 避免点过 3/3 再点时数组越界报错。想看越界崩溃可以把取余去掉。
    setIndex((index + 1) % sculptureList.length);
  }

  const sculpture = sculptureList[index];

  return (
    <>
      <button
        onClick={handleClick}
        className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
      >
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}
