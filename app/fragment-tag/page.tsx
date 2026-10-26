import { Fragment } from "react";

// 本页专门讲清楚 <Fragment> 这个"标签"到底是什么。
// 它就是 React 提供的一个"幽灵包裹"——只用来在 JSX 里把多个元素
// 归成一组，但渲染到页面后，它本身【不会】出现在真实 DOM 里。

type Person = {
  id: number;
  name: string;
  bio: string;
};

const people: Person[] = [
  { id: 1, name: "马里亚·斯克沃多夫斯卡-居里", bio: "物理学家、化学家" },
  { id: 2, name: "阿尔伯特·爱因斯坦", bio: "理论物理学家" },
  { id: 3, name: "屠呦呦", bio: "药学家，诺贝尔奖得主" },
];

export default function FragmentTagPage() {
  // 写法 A：每个列表项用一个真 <div> 包裹（会真的进 DOM）
  const withDiv = people.map((person) => (
    <div key={person.id}>
      <h3 className="font-bold">{person.name}</h3>
      <p className="text-sm text-gray-500">{person.bio}</p>
    </div>
  ));

  // 写法 B：每个列表项用 <Fragment> 包裹（幽灵标签，不进 DOM）
  const withFragment = people.map((person) => (
    <Fragment key={person.id}>
      <h3 className="font-bold">{person.name}</h3>
      <p className="text-sm text-gray-500">{person.bio}</p>
    </Fragment>
  ));

  return (
    <main className="mx-auto max-w-3xl space-y-10 p-8">
      <h1 className="text-2xl font-bold text-gray-800">
        认识 {"<Fragment>"} 这个"幽灵标签"
      </h1>

      {/* 写法 A */}
      <section>
        <h2 className="mb-3 text-sm font-semibold text-gray-600">
          写法 A：用真的 {"<div>"} 包裹每一项
        </h2>
        <div className="rounded border border-gray-200 p-4">{withDiv}</div>
        <p className="mt-2 text-xs text-gray-400">
          打开浏览器"检查"，你会看到每个姓名下面都多了一个{" "}
          {"<div>"} 层。
        </p>
      </section>

      {/* 写法 B */}
      <section>
        <h2 className="mb-3 text-sm font-semibold text-gray-600">
          写法 B：用 {"<Fragment>"} 包裹每一项
        </h2>
        <div className="rounded border border-gray-200 p-4">{withFragment}</div>
        <p className="mt-2 text-xs text-gray-400">
          打开"检查"，姓名和简介之间【没有】任何额外包裹层，
          {"<Fragment>"} 本身凭空消失了。
        </p>
      </section>

      {/* 两种写法的 DOM 结构对照，不用开 DevTools 也能看懂 */}
      <section className="rounded bg-gray-50 p-4">
        <h2 className="mb-3 text-sm font-semibold text-gray-600">
          两种写法最终生成的 DOM 长这样
        </h2>
        <p className="mb-2 text-xs text-gray-500">写法 A（div 版）：</p>
        <pre className="mb-4 overflow-x-auto rounded bg-white p-3 text-xs">
{`<div>          ← 外层容器
  <div>        ← 列表项A的包裹
    <h3>马里亚…</h3>
    <p>物理学家…</p>
  </div>
  <div>        ← 列表项B的包裹
    <h3>爱因斯坦</h3>
    <p>理论物理…</p>
  </div>
  …</div>`}
        </pre>
        <p className="mb-2 text-xs text-gray-500">写法 B（Fragment 版）：</p>
        <pre className="overflow-x-auto rounded bg-white p-3 text-xs">
{`<div>          ← 外层容器
  <h3>马里亚…</h3>   ← 没有多余包裹，直接是内容
  <p>物理学家…</p>
  <h3>爱因斯坦</h3>
  <p>理论物理…</p>
  …</div>`}
        </pre>
      </section>

      <section className="space-y-2 text-sm text-gray-600">
        <h2 className="text-sm font-semibold text-gray-600">
          关于 {"<Fragment>"} 的 3 个要点
        </h2>
        <ol className="list-decimal space-y-1 pl-5">
          <li>
            它不是 HTML 标签，是 React 自带的一个"组件"，所以要{" "}
            <code>import {"{ Fragment }"} from "react"</code>（只有长写法才需要导入）。
          </li>
          <li>
            简写 {"<>…</>"} 和 {"<Fragment>…</Fragment>"} 是同一个东西；
            但简写 <strong>不能加属性</strong>，所以列表里要带{" "}
            <code>key</code> 时，必须用长写法 {"<Fragment key={id}>"}。
          </li>
          <li>
            它存在的理由：JSX 要求"只能有一个根元素"，但有时你
            <strong>不想</strong>多套一层真标签（比如表格 {"<tr>"} 里不能塞
            {"<div>"}，或 flex/grid 的直接子元素关系会被打乱）。
            Fragment 帮你"合规地分组"，又不污染 DOM。
          </li>
        </ol>
      </section>
    </main>
  );
}
