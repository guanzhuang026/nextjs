import { ProfileVerbose, ProfileSpread } from "@/components/ProfileForward";

export default function SpreadDemoPage() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-2 text-2xl font-bold text-gray-800">
        用 JSX 展开语法 {"{...props}"} 转发 props
      </h1>
      <p className="mb-6 text-sm text-gray-500">
        下面左右两组用不同写法传同样的 props，渲染结果完全一样：
        左 = 逐个列出；右 = 用 {"{...props}"} 一次性转发。
      </p>

      <div className="grid grid-cols-2 gap-6">
        <section>
          <h2 className="mb-3 text-sm font-semibold text-gray-600">
            写法 A：逐个列出
          </h2>
          <ProfileVerbose
            size={100}
            person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
            isSepia
            thickBorder
          />
        </section>

        <section>
          <h2 className="mb-3 text-sm font-semibold text-gray-600">
            写法 B：展开转发
          </h2>
          <ProfileSpread
            size={100}
            person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
            isSepia
            thickBorder
          />
        </section>
      </div>
    </main>
  );
}
