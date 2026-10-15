// 这个页面用来「消费」Parts.tsx 里的具名导出。
// 注意第 1 行：用花括号 {} 一次性具名导入了 3 个东西，名字必须和导出时完全一致。
import { Avatar, Tag, BRAND } from "@/components/Parts";
import Link from "next/link";

// 一份科学家数据，用来给 Avatar 传不同的 props
const scientists = [
  {
    name: "Katherine Johnson",
    src: "https://react.dev/images/docs/scientists/KatherineJohnson.jpg",
  },
  {
    name: "Alan L. Hart",
    src: "https://react.dev/images/docs/scientists/AlanLHart.jpg",
  },
  {
    name: "Katsuko Saruhashi",
    src: "https://react.dev/images/docs/scientists/KatsukoSaruhashi.jpg",
  },
];

export default function PartsDemoPage() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      {/* BRAND 是一个具名导出的常量，这里当普通文本用 */}
      <h1 className="mb-2 text-2xl font-bold text-gray-800">{BRAND}</h1>
      <p className="mb-6 text-sm text-gray-500">
        本页从 <code>@/components/Parts</code> 具名导入了 3 个零件：Avatar（头像）、Tag（徽章）、BRAND（常量）。
      </p>

      {/* 具名导出 1：Avatar 组件，用 props 传不同数据复用 */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold text-gray-700">1. Avatar（具名导出的组件）</h2>
        <div className="flex gap-6">
          {scientists.map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-2">
              <Avatar src={s.src} name={s.name} />
              <span className="text-xs text-gray-600">{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 具名导出 2：Tag 组件 */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold text-gray-700">2. Tag（具名导出的组件）</h2>
        <div className="flex flex-wrap gap-2">
          <Tag label="React" />
          <Tag label="Next.js" />
          <Tag label="具名导出" />
          <Tag label="App Router" />
        </div>
      </section>

      {/* 具名导出 3：BRAND 常量再次出现 */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold text-gray-700">3. BRAND（具名导出的常量）</h2>
        <p className="rounded bg-gray-50 p-3 text-sm text-gray-600">
          底部署名：{BRAND}
        </p>
      </section>

      <Link href="/gallery" className="text-sm text-blue-600 hover:underline">
        ← 返回 Gallery 示例
      </Link>
    </main>
  );
}
