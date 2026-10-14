export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 全局导航栏已移到根布局 app/layout.tsx，这里只作为 /about 区块的嵌套布局占位。
  // 以后想给 /about 及其子路由加区块专属 UI（比如侧边栏），写在这里即可。
  return <>{children}</>;
}
