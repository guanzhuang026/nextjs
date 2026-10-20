import { Card } from "@/components/Card";
import { Avatar } from "@/components/Avatar";

export default function ChildrenDemoPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 p-8">
      <h1 className="text-2xl font-bold text-gray-800">
        把 JSX 作为 children 传给组件
      </h1>
      <p className="text-sm text-gray-500">
        Card 组件自己不知道里面会放什么——它只留了一个 {"children"} 的"洞"，
        父组件往里塞什么 JSX 都行。下面用 3 个例子演示。
      </p>

      {/* 例 1：children 里是一个 Avatar 组件（教程原版示例） */}
      <section>
        <h2 className="mb-3 text-sm font-semibold text-gray-600">
          例 1：children 是一个组件
        </h2>
        <Card>
          <Avatar
            size={100}
            person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
          />
        </Card>
      </section>

      {/* 例 2：children 里是一段普通文字（证明 Card 不关心里面是什么） */}
      <section>
        <h2 className="mb-3 text-sm font-semibold text-gray-600">
          例 2：children 是一段文字
        </h2>
        <Card>
          <p>随便一段文字，Card 照样包得住。</p>
        </Card>
      </section>

      {/* 例 3：children 里是多个元素（头像 + 文字） */}
      <section>
        <h2 className="mb-3 text-sm font-semibold text-gray-600">
          例 3：children 是多个元素
        </h2>
        <Card>
          <Avatar size={60} person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} />
          <p className="mt-2 text-sm text-gray-600">头像 + 文字，一起被包住。</p>
        </Card>
      </section>
    </main>
  );
}
