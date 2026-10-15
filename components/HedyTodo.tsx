// ===================================================================
// HedyTodo.tsx —— 演示 JSX 规则①：组件只能返回一个根元素
// 同一个文件导出两种写法做对比：
//   - TodoWithDiv      用 <div> 包裹（会多一个 DOM 节点）
//   - TodoWithFragment 用 <> Fragment 包裹（不额外增加 DOM 节点）
// ===================================================================

// 两份组件要渲染的「同一份内容」：标题 + 图片 + 列表
// 注意它们现在是「多个平级兄弟元素」，不能直接 return，必须有一个根包住。
function innerContent() {
  return (
    <>
      <h1 className="text-xl font-bold text-gray-800">海蒂·拉玛的待办事项</h1>
      <img
        className="my-3 h-40 rounded shadow"
        src="https://react.dev/images/docs/scientists/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
      />
      <ul className="list-disc space-y-1 pl-6 text-gray-700">
        <li>学习编程</li>
        <li>写剧本</li>
        <li>发明一种除颤器</li>
      </ul>
    </>
  );
}

// ---------- 解法 1：用 <div> 当根元素包裹 ----------
// 缺点：页面 HTML 里会多嵌套一层 <div>。
export function TodoWithDiv() {
  return (
    <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
      {innerContent()}
    </div>
  );
}

// ---------- 解法 2：用 <> Fragment 当根元素包裹 ----------
// 优点：React 不会在最终 HTML 里生成任何额外节点，
//       <h1>/<img>/<ul> 会直接挂到父元素下，结构更干净。
export function TodoWithFragment() {
  return (
    <>
      {innerContent()}
    </>
  );
}
