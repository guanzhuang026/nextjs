// cardkit-demo/page.tsx
// 演示如何从 CardKit.tsx 同时「默认导入」和「具名导入」。
//
// PriceCard 是默认导出 → 导入时不写花括号，名字可自定义（这里就叫 PriceCard）
// Card / Button / formatPrice / SITE_NAME 是具名导出 → 必须写花括号 {}，且名字要和导出时一模一样

import PriceCard from "@/components/CardKit"; // 默认导入（无 {}）
import { Card, Button, formatPrice, SITE_NAME } from "@/components/CardKit"; // 具名导入（有 {}）
import Link from "next/link";

export default function CardKitDemoPage() {
  const items = [
    { name: "居民身份证办理", price: 0 },
    { name: "营业执照副本", price: 20 },
    { name: "不动产登记证明", price: 80 },
  ];

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-1 text-2xl font-bold text-gray-800">{SITE_NAME}</h1>
      <p className="mb-6 text-sm text-gray-500">
        本页从 <code>@/components/CardKit</code> 导入了：1 个默认导出（PriceCard）+ 4 个具名导出（Card / Button / formatPrice / SITE_NAME）。
      </p>

      {/* 具名导入直接用的零件：Card + Button + formatPrice */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold text-gray-700">1. 具名导出的零件单独使用</h2>
        <Card title="费用说明">
          <p>最低收费：{formatPrice(0)}</p>
          <p className="mt-2"><Button label="查看详情" /></p>
        </Card>
      </section>

      {/* 默认导入的主组件：PriceCard（它内部又用了具名导出的 Card / Button / formatPrice） */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold text-gray-700">2. 默认导入的主组件（内部复用具名零件）</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map((it) => (
            <PriceCard key={it.name} name={it.name} price={it.price} />
          ))}
        </div>
      </section>

      <Link href="/parts-demo" className="text-sm text-blue-600 hover:underline">
        ← 看另一个具名导出示例（parts-demo）
      </Link>
    </main>
  );
}
