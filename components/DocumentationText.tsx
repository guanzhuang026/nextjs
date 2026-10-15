// 正文段落组件：把一段说明文字封装成可复用组件。
export default function DocumentationText() {
  return (
    <section className="mt-8 max-w-3xl text-gray-700 leading-relaxed">
      <p>
        组件是 React 的核心概念之一。它们将标签、CSS 和 JavaScript 组合成可复用的 UI
        元素。就像使用 HTML 标签一样，你可以组合、排序和嵌套组件来绘制整个页面。
      </p>
    </section>
  );
}
