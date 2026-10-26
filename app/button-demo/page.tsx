import Button from "@/components/SimpleButton";

// 最简单的示例页：只渲染一个 <Button />，点它就弹 alert。
export default function ButtonDemoPage() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-6 text-xl font-bold text-gray-800">
        事件处理 · 简单示例
      </h1>
      <Button />
    </main>
  );
}
