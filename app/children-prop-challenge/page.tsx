import type { ReactNode } from "react";

// ===== 官方挑战 3：从两段重复的卡片结构里提取 Card 组件 =====
//
// 原来的结构是（重复了两遍）：
//   <div className="card">
//     <div className="card-content">
//       <h1>标题</h1>
//       ...内容...
//     </div>
//   </div>
//
// 提取出的 Card 收两类东西：
//   - children：夹在 <Card>...</Card> 之间的内容（图片 / 段落），由父组件决定放什么
//   - title：单独用一个普通 prop 传标题，避免把 <h1> 也塞进 children

function Card({ children, title }: { children: ReactNode; title: string }) {
  return (
    <div className="card rounded-lg border border-gray-200 p-4 shadow-sm">
      <div className="card-content">
        <h1 className="mb-2 text-lg font-semibold text-gray-800">{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div className="space-y-4 p-8">
      {/* 卡片 1：children 是一张图片 */}
      <Card title="Photo">
        <img
          className="avatar rounded-full"
          src="https://react.dev/images/docs/scientists/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={100}
          height={100}
        />
      </Card>

      {/* 卡片 2：children 是一段文字 */}
      <Card title="About">
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}
