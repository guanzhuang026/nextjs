"use client";

import { useState } from "react";

export default function HookOrderDemo() {
  // ============================================================
  // 三个 state，值/类型都不同 —— 这样"换槽"的后果才看得出来
  // ============================================================
  const [index, setIndex] = useState(0); // 槽 0：数字（当前显示第几张图）
  const [showMore, setShowMore] = useState(false); // 槽 1：布尔（是否展开简介）
  const [form, setForm] = useState({ name: "" }); // 槽 2：对象（表单数据）

  return (
    <main className="mx-auto max-w-2xl space-y-6 p-8">
      <h1 className="text-xl font-bold text-gray-800">
        Hook 的"顶层调用"与"按固定顺序"（值明明不一样）
      </h1>

      {/* 三个状态各管各的，值/类型都不同 */}
      <section className="space-y-3 rounded border border-gray-200 p-4">
        <p className="text-sm text-gray-600">
          index（槽 0，数字）：{index}
        </p>
        <button
          className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
          onClick={() => setIndex(index + 1)}
        >
          index +1
        </button>

        <p className="mt-2 text-sm text-gray-600">
          showMore（槽 1，布尔）：{String(showMore)}
        </p>
        <button
          className="rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600"
          onClick={() => setShowMore(!showMore)}
        >
          切换 showMore
        </button>

        <p className="mt-2 text-sm text-gray-600">
          form（槽 2，对象）：{JSON.stringify(form)}
        </p>
      </section>

      {/* 用代码对照讲清"换槽为什么是灾难" */}
      <section className="rounded bg-gray-50 p-4">
        <h2 className="mb-2 text-sm font-semibold text-gray-600">
          为什么"换槽"是灾难（值根本不一样）
        </h2>
        <pre className="overflow-x-auto rounded bg-white p-3 text-xs leading-6">
{`正常顺序（顶层，稳定）：
  const [index, setIndex] = useState(0);          // 槽0 存数字
  const [showMore, setShowMore] = useState(false); // 槽1 存布尔
  → index 读到数字、showMore 读到布尔，类型对得上 ✅

如果两行换位置（或塞进 if 让顺序乱）：
  const [showMore, setShowMore] = useState(false); // 现在占槽0（数字位）
  const [index, setIndex] = useState(0);           // 现在占槽1（布尔位）
  → index 反而读到了布尔 false，showMore 反而读到了数字 0
  → 翻图用 false 当下标、展开用数字当开关 → 直接崩 / 逻辑全乱 ❌`}
        </pre>
      </section>

      {/* 点出"值会被记住、跨渲染保存" */}
      <section className="rounded bg-gray-50 p-4">
        <h2 className="mb-2 text-sm font-semibold text-gray-600">
          关键：state 的值会被"记住"并随交互改变
        </h2>
        <pre className="overflow-x-auto rounded bg-white p-3 text-xs leading-6">
{`槽里存的不是初值，而是"你最后一次存进去的值"。
  你点了几下 index +1 → 槽0 此刻可能存着 2（第 3 张图）。
下次渲染，React 按【位置】把槽0 交给"写在最前面的那个变量"。
顺序一乱，这个 2 就被错交给别的变量了 —— 这才是换槽要命的地方。`}
        </pre>
      </section>
    </main>
  );
}
