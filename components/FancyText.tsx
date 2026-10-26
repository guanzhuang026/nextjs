// FancyText：一个"会变样子的文字"组件。
// 通过 props 控制它是大标题（title）还是正文（text），还能换颜色（color）。
// 同一个组件在渲染树里可以出现在不同位置——这就是"组件可复用"的体现。
export function FancyText({
  title = false,
  color = "navy",
  text,
}: {
  title?: boolean;
  color?: string;
  text: string;
}) {
  // 注意 style={{...}} 还是双括号：外层是 JSX 写 JS，内层是样式对象
  if (title) {
    return (
      <h2 className="text-2xl font-bold" style={{ color }}>
        {text}
      </h2>
    );
  }
  return (
    <p className="text-base" style={{ color }}>
      {text}
    </p>
  );
}
