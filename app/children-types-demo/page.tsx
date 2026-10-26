import { Card } from "@/components/Card";

// 这个页面专门回答一个问题：
// 「children: ReactNode; 这算是啥类型，children 里写多少标签都可以吗？」
//
// 结论先说：可以。children 里放 1 个标签、10 个标签、纯文字、
// 甚至再塞一个 <Card>（套娃）都行——因为 ReactNode 是
// 「React 能渲染的任何东西」的统称。下面用同一个 <Card> 演示。

export default function ChildrenTypesDemoPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 p-8">
      <h1 className="text-2xl font-bold text-gray-800">
        children 到底能装多少？（ReactNode 是什么）
      </h1>
      <p className="text-sm text-gray-500">
        下面所有例子用的都是同一个 {"<Card>"} 组件，唯一区别是夹在
        {"<Card>...</Card>"} 中间的内容不同。Card 自己完全不关心，照单全收。
      </p>

      {/* 1 个标签 */}
      <section>
        <h2 className="mb-3 text-sm font-semibold text-gray-600">
          ① 只放 1 个标签
        </h2>
        <Card>
          <p>就一个 {"<p>"}，完全没问题。</p>
        </Card>
      </section>

      {/* 很多个标签 */}
      <section>
        <h2 className="mb-3 text-sm font-semibold text-gray-600">
          ② 一下子放 5 个标签
        </h2>
        <Card>
          <h3 className="font-bold">标题</h3>
          <p>第一段。</p>
          <p>第二段。</p>
          <ul className="list-disc pl-5">
            <li>列表项一</li>
            <li>列表项二</li>
          </ul>
          <p>最后一段。</p>
        </Card>
      </section>

      {/* 纯文字，没有标签 */}
      <section>
        <h2 className="mb-3 text-sm font-semibold text-gray-600">
          ③ 纯文字（连标签都不用）
        </h2>
        <Card>就这么一段光秃秃的文字，也能当 children。</Card>
      </section>

      {/* 套娃：Card 里面再放 Card */}
      <section>
        <h2 className="mb-3 text-sm font-semibold text-gray-600">
          ④ 套娃：children 里再放一个 Card
        </h2>
        <Card>
          <p className="mb-2 text-sm">外层 Card 的 children 是一个「内层 Card」：</p>
          <Card>
            <p>我是被包在里面的第二层 Card。</p>
          </Card>
        </Card>
      </section>

      <p className="rounded bg-gray-50 p-4 text-sm text-gray-600">
        为什么这么"百搭"？因为 Card 的 props 类型写的是{" "}
        <code>children: ReactNode</code>。ReactNode 是 React 给"能渲染的东西"
        起的一个总称（联合类型），包括：JSX 元素、字符串、数字、
        {"true/false"}、{"null"}、以及它们的数组。所以你塞什么进去，
        Card 都能原样渲染出来。
      </p>
    </main>
  );
}
