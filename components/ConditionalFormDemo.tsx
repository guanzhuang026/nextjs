"use client";

import { useState } from "react";
import QuizForm from "@/components/QuizForm";

export default function ConditionalFormDemo() {
  // status 由父组件控制：'empty' 显示表单，'success' 显示成功提示
  const [status, setStatus] = useState<"empty" | "success">("empty");

  return (
    <main className="mx-auto max-w-2xl px-6 py-8">
      <h1 className="mb-2 text-2xl font-bold text-zinc-950 dark:text-zinc-50">
        条件渲染：提前 return
      </h1>
      <p className="mb-6 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        <code>QuizForm</code> 接收 <code>status</code> 参数（默认{" "}
        <code>"empty"</code>）。当 <code>status === "success"</code> 时，组件在顶部
        就 <code>return</code> 出成功提示，下面的表单根本不渲染；否则显示测验表单。
        点下面的按钮切换 <code>status</code>，看 UI 如何在「表单 ↔ 成功提示」之间切换。
      </p>

      <div className="rounded-lg border border-black/[.08] p-4 dark:border-white/[.145]">
        <QuizForm status={status} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => setStatus("success")}
          className="rounded bg-green-500 px-3 py-1.5 text-sm font-medium text-white"
        >
          模拟答对（status = success）
        </button>
        <button
          onClick={() => setStatus("empty")}
          className="rounded bg-zinc-500 px-3 py-1.5 text-sm font-medium text-white"
        >
          重新开始（status = empty）
        </button>
      </div>
    </main>
  );
}
