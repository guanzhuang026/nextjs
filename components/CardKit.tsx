// ===================================================================
// CardKit.tsx —— 一个「零件库」文件
// 演示：同一个文件里，默认导出（1 个）+ 具名导出（多个）如何共存。
// 这是真实项目里最常见的写法：主组件用默认导出，辅助零件用具名导出。
// ===================================================================

// ---------- 具名导出 1：卡片容器组件 ----------
export function Card(props: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
      <h3 className="mb-2 text-base font-semibold text-gray-800">{props.title}</h3>
      <div className="text-sm text-gray-600">{props.children}</div>
    </div>
  );
}

// ---------- 具名导出 2：按钮组件 ----------
export function Button(props: { label: string }) {
  return (
    <button className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700">
      {props.label}
    </button>
  );
}

// ---------- 具名导出 3：普通工具函数（也能具名导出） ----------
export function formatPrice(amount: number) {
  return "¥" + amount.toFixed(2);
}

// ---------- 具名导出 4：配置常量（也能具名导出） ----------
export const SITE_NAME = "佛山政务练习站";

// ---------- 默认导出（一个文件只能有 1 个） ----------
// 这个文件的主角是一张「价格卡片」，所以把它设为默认导出。
export default function PriceCard(props: { name: string; price: number }) {
  return (
    <Card title={props.name}>
      <p className="mb-3">价格：{formatPrice(props.price)}</p>
      <Button label="立即办理" />
    </Card>
  );
}
