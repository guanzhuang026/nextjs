"use client";

import { useState } from "react";

// 演示数据
const sculptures = [
  { name: "思想者", desc: "罗丹创作的思考者人像。" },
  { name: "大卫", desc: "米开朗基罗的大理石雕像。" },
];

// 表单字段类型（三个字段是"同一个人"的信息）
type Form = {
  firstName: string;
  lastName: string;
  age: string;
};

export default function StateStructureDemo() {
  // ============================================================
  // 第 1 部分：两个互不相关的 state —— 分开写最好
  // index（显示第几个）和 showMore（是否展开简介）互不影响，
  // 各自改各自，用两个 useState 最清楚。这正是教程说的 index + showMore 例子。
  // ============================================================
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const s = sculptures[index];

  // ============================================================
  // 第 2 部分：多个字段本质是同一条记录 —— 合并成一个对象 state
  // 表单里 firstName / lastName / age 是"同一个人"的信息，经常一起变，
  // 用一堆独立 useState 会很啰嗦，于是合成一个对象。
  // ============================================================
  const [form, setForm] = useState<Form>({
    firstName: "",
    lastName: "",
    age: "",
  });

  // 关键：用展开运算符保留其他字段，只覆盖当前改的那一项（不可变更新）
  function updateField(field: keyof Form, value: string) {
    setForm({ ...form, [field]: value });
  }

  return (
    <main className="mx-auto max-w-2xl space-y-10 p-8">
      {/* ---------- 第 1 部分 ---------- */}
      <section className="space-y-3 rounded border border-gray-200 p-4">
        <h2 className="font-bold text-gray-800">① 不相关的 state：分开写</h2>
        <p className="text-sm text-gray-600">
          当前雕塑：{s.name}（{index + 1}/{sculptures.length}）
          <button
            className="ml-3 rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
            onClick={() => setIndex((i) => (i + 1) % sculptures.length)}
          >
            下一个
          </button>
        </p>
        <button
          className="rounded bg-gray-200 px-3 py-1 text-gray-800 hover:bg-gray-300"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "收起简介" : "显示简介"}
        </button>
        {showMore && <p className="text-sm text-gray-600">{s.desc}</p>}
        <p className="text-xs text-gray-400">
          index 管"第几个"，showMore 管"是否展开"，各管各的、互不干涉 → 用两个 useState。
        </p>
      </section>

      {/* ---------- 第 2 部分 ---------- */}
      <section className="space-y-3 rounded border border-gray-200 p-4">
        <h2 className="font-bold text-gray-800">② 相关的字段：合并成对象 state</h2>
        <div className="flex flex-wrap gap-3">
          <input
            className="rounded border px-3 py-2"
            placeholder="名"
            value={form.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
          />
          <input
            className="rounded border px-3 py-2"
            placeholder="姓"
            value={form.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
          />
          <input
            className="rounded border px-3 py-2"
            placeholder="年龄"
            value={form.age}
            onChange={(e) => updateField("age", e.target.value)}
          />
        </div>
        <pre className="overflow-x-auto rounded bg-gray-50 p-3 text-xs">
          {JSON.stringify(form, null, 2)}
        </pre>
        <p className="text-xs text-gray-400">
          三个输入框都改同一个对象 state；若改成"三个独立 useState"会多写好几行，
          而且一起改时还容易漏掉某一个。
        </p>
      </section>
    </main>
  );
}
