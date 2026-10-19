import { Avatar } from "@/components/Avatar";

// 父组件（页面）：给同一个 Avatar 传不同的 props，它就渲染出不同样子
export default function PropsDemoPage() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-2 text-2xl font-bold text-gray-800">
        向组件传递 Props 示例
      </h1>
      <p className="mb-6 text-sm text-gray-500">
        父组件用 <code>{'<Avatar person={...} size={...} />'}</code> 给子组件传 props；
        同一个 Avatar，传不同的 person / size，就渲染出三种样子。
      </p>

      <div className="flex items-end gap-6">
        <figure className="text-center">
          {/* 传给 Avatar 的 props：person（对象）+ size（数字） */}
          <Avatar
            size={100}
            person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
          />
          <figcaption className="mt-2 text-xs text-gray-600">size=100</figcaption>
        </figure>

        <figure className="text-center">
          <Avatar
            size={80}
            person={{ name: "Aklilu Lemma", imageId: "OKS67lh" }}
          />
          <figcaption className="mt-2 text-xs text-gray-600">size=80</figcaption>
        </figure>

        <figure className="text-center">
          <Avatar
            size={50}
            person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}
          />
          <figcaption className="mt-2 text-xs text-gray-600">size=50</figcaption>
        </figure>
      </div>
    </main>
  );
}
