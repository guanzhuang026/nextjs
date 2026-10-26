import EventMethodsDemo from "@/components/EventMethodsDemo";

// 最简页面：只渲染示例组件。
export default function EventMethodsPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 p-8">
      <h1 className="text-2xl font-bold text-gray-800">
        e.stopPropagation() vs e.preventDefault()
      </h1>
      <EventMethodsDemo />
    </main>
  );
}
