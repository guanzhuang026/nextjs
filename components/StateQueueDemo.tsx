"use client";

import { useState } from "react";

// ===== 核心实现：模拟 React 处理 state 更新队列 =====
// queue 里既可能是「数字」（直接覆盖 state），也可能是「函数」（用当前 state 算下一个值）
type QueueItem = number | ((n: number) => number);

export function getFinalState(
  baseState: number,
  queue: QueueItem[],
): number {
  let finalState = baseState;
  for (const update of queue) {
    if (typeof update === "function") {
      // 函数更新：用「当前值」算下一个值
      finalState = update(finalState);
    } else {
      // 数字更新：直接覆盖成这个数字
      finalState = update;
    }
  }
  return finalState;
}

const increment = (n: number) => n + 1;

// 把队列里的一项转成好看的字符串（函数统一显示成 n => n+1）
function displayItem(item: QueueItem): string {
  return typeof item === "function" ? "n => n+1" : String(item);
}

// 官方 4 个测试用例
const testCases: { baseState: number; queue: QueueItem[]; expected: number }[] = [
  { baseState: 0, queue: [1, 1, 1], expected: 1 },
  { baseState: 0, queue: [increment, increment, increment], expected: 3 },
  { baseState: 0, queue: [5, increment], expected: 6 },
  { baseState: 0, queue: [5, increment, 42], expected: 42 },
];

function TestCase({
  baseState,
  queue,
  expected,
}: {
  baseState: number;
  queue: QueueItem[];
  expected: number;
}) {
  const actual = getFinalState(baseState, queue);
  const pass = actual === expected;
  return (
    <div className="rounded-lg border border-black/[.08] p-4 dark:border-white/[.145]">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        初始 state：<b className="text-zinc-950 dark:text-zinc-50">{baseState}</b>
      </p>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        队列：
        <b className="text-zinc-950 dark:text-zinc-50">
          [{queue.map(displayItem).join(", ")}]
        </b>
      </p>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        预期结果：<b className="text-zinc-950 dark:text-zinc-50">{expected}</b>
      </p>
      <p
        className="text-sm font-medium"
        style={{ color: pass ? "#16a34a" : "#dc2626" }}
      >
        你的结果：<b>{actual}</b> {pass ? "（正确）" : "（错误）"}
      </p>
    </div>
  );
}

export default function StateQueueDemo() {
  // ===== 交互试玩区：自己往队列里加东西，看最终 state =====
  const [queue, setQueue] = useState<QueueItem[]>([0]);

  function addNumber() {
    setQueue((q) => [...q, 5]);
  }
  function addIncrement() {
    setQueue((q) => [...q, increment]);
  }
  function reset() {
    setQueue([0]);
  }

  const playgroundResult = getFinalState(0, queue);

  return (
    <main className="mx-auto max-w-2xl px-6 py-8">
      <h1 className="mb-2 text-2xl font-bold text-zinc-950 dark:text-zinc-50">
        自己实现 state 队列
      </h1>
      <p className="mb-6 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        规则：队列里是 <b>数字</b> 就直接把 state 覆盖成它；是 <b>函数</b>（如{" "}
        <code>n =&gt; n + 1</code>）就用「当前 state」调用它、拿返回值当新 state。
        这正是 React 处理 <code>setState</code> 队列的方式。
      </p>

      <h2 className="mb-3 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
        官方 4 个测试用例
      </h2>
      <div className="mb-8 flex flex-col gap-3">
        {testCases.map((tc, i) => (
          <TestCase key={i} {...tc} />
        ))}
      </div>

      <h2 className="mb-3 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
        试玩：自己构造队列（初始 state = 0）
      </h2>
      <div className="rounded-lg border border-black/[.08] p-4 dark:border-white/[.145]">
        <div className="mb-3 flex flex-wrap gap-2">
          <button
            onClick={addNumber}
            className="rounded bg-blue-500 px-3 py-1.5 text-sm font-medium text-white"
          >
            加数字 5
          </button>
          <button
            onClick={addIncrement}
            className="rounded bg-green-500 px-3 py-1.5 text-sm font-medium text-white"
          >
            加函数 +1
          </button>
          <button
            onClick={reset}
            className="rounded bg-zinc-500 px-3 py-1.5 text-sm font-medium text-white"
          >
            重置
          </button>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          当前队列：
          <b className="text-zinc-950 dark:text-zinc-50">
            [{queue.map(displayItem).join(", ")}]
          </b>
        </p>
        <p className="mt-1 text-sm font-medium text-zinc-950 dark:text-zinc-50">
          最终 state：<b className="text-lg">{playgroundResult}</b>
        </p>
        <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
          试试：连点 3 次「加函数 +1」→ 结果是 3；连点 3 次「加数字 5」→ 结果是 5（覆盖来覆盖去）。
          这就是之前 +3 计数器只 +1 的原因。state 中可以保存任意类型的 JavaScript 值，包括对象。但是，你不应该直接修改存放在 React state 中的对象。相反，当你想要更新一个对象时，你需要创建一个新的对象（或者将其拷贝一份），然后将 state 更新为此对象。
        </p>
      </div>
    </main>
  );
}
