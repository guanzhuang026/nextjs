import Profile from "@/components/Profile";

// 这一页演示「定义组件」这节课：
// Profile 就是用 export default function 定义、返回一段 JSX 的组件。
// 组件可以像标签一样随手复用——下面把同一个 <Profile /> 渲染了两次。
export default function DefineComponentPage() {
  return (
    <main className="flex flex-col items-center gap-6 p-10">
      <h1 className="text-2xl font-bold">定义组件（Profile）</h1>
      <Profile />
      <p className="text-sm text-gray-500">同一个组件可以重复使用：</p>
      <Profile />
    </main>
  );
}
