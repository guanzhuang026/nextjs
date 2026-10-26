"use client";

import { useState } from "react";

// 用内联数据替代教程的 ./data.js，让示例能独立运行。
type Sculpture = {
  name: string;
  artist: string;
  description: string;
  url: string;
  alt: string;
};

const sculptureList: Sculpture[] = [
  {
    name: "思想者",
    artist: "罗丹",
    description: "一座陷入沉思的人像雕塑。",
    url: "https://picsum.photos/seed/s1/200",
    alt: "思想者雕像",
  },
  {
    name: "大卫",
    artist: "米开朗基罗",
    description: "文艺复兴时期的经典大理石像。",
    url: "https://picsum.photos/seed/s2/200",
    alt: "大卫雕像",
  },
  {
    name: "维纳斯",
    artist: "作者未知",
    description: "著名的断臂女神像。",
    url: "https://picsum.photos/seed/s3/200",
    alt: "维纳斯雕像",
  },
];

// 正确版本：用 useState 让 index 成为"组件的记忆"
export default function Gallery() {
  // useState(0) 返回 [值, 修改函数]。index 由 React 记住，不会每次渲染归零。
  const [index, setIndex] = useState(0);

  // 事件处理函数里调用 setIndex 来改值，React 收到信号后会重新渲染。
  // 用 i => ... 的写法（函数式更新）更安全，尤其快速连点时不会漏算。
  function handleClick() {
    setIndex((i) => (i + 1) % sculptureList.length); // 取余是为了循环，避免越界
  }

  const sculpture = sculptureList[index];

  return (
    <main className="mx-auto max-w-lg p-8 text-center">
      <button
        onClick={handleClick}
        className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
      >
        Next
      </button>
      <h2 className="mt-4 text-xl">
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3 className="text-gray-500">
        ({index + 1} of {sculptureList.length})
      </h3>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
        className="mx-auto my-4 rounded shadow"
      />
      <p className="text-sm text-gray-600">{sculpture.description}</p>
    </main>
  );
}
