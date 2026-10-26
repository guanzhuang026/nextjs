// Copyright：最底层的叶子组件，只渲染一段文字。
// year 由父组件通过 props 传进来。
export function Copyright({ year }: { year: number }) {
  return (
    <p className="text-xs text-gray-400">
      © {year} 我的学习项目 · 保留所有权利
    </p>
  );
}
