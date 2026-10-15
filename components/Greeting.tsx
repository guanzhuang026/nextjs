// 规则：一个组件 return 的东西，最外面只能有「一个根」。
// 这里 h1 / p / p 是三个平级标签，必须用外层包起来。
// 用 <> ... </> （Fragment）包，不会在 HTML 里多出节点。

export function Greeting() {
  return (
    <>
      <h1>你好</h1>
      <p>这是第一段。</p>
      <p>这是第二段。</p>
    </>
  );
}
