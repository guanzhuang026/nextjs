// 教程第二节：定义组件
//
// 第一步 · 导出组件
//   export default 是 JavaScript 标准语法（不是 React 特有），
//   表示「这个文件的主函数」，方便别的文件 import 进来用。
//
// 第二步 · 定义函数
//   function Profile() {} —— 组件本质就是一个普通的 JavaScript 函数。
//
// 第三步 · 添加标签
//   返回的 <img /> 看起来像 HTML，其实是 JSX（在 JavaScript 里写标签的语法）。
//
// 两个陷阱（新手最常踩）：
//   1. 组件名必须以【大写字母】开头，否则 React 会把它当成普通 HTML 标签而不渲染！
//   2. 如果 return 的标签和 return 关键字不在同一行，必须用小括号 () 包起来；
//      否则 return 下一行的代码会被直接忽略。

export default function Profile() {
  return (
    <img
      src="https://react.dev/images/docs/scientists/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  );
}
