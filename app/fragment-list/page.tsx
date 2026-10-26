import { PeopleList } from "@/components/PeopleList";

export default function FragmentListPage() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-2 text-2xl font-bold text-gray-800">
        每个列表项渲染多个 DOM 节点（Fragment + key）
      </h1>
      <p className="mb-6 text-sm text-gray-500">
        下面每个科学家都输出 h1 + p 两个标签；用 &lt;Fragment key=...&gt; 包裹。
        打开浏览器"检查"元素，会看到 .people 下面直接是 h1 / p，没有多出来的 div 或 Fragment。
      </p>

      <PeopleList />

      <p className="mt-6 text-xs text-gray-400">
        对比：若用 &lt;div&gt; 包裹每个 item，DOM 里会多一层 div；Fragment 则"隐形"。
      </p>
    </main>
  );
}
