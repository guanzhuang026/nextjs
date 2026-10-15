// 演示：在 JSX 的 {} 花括号里写 JavaScript（调用函数、嵌入表达式）
'use client'; // 让 new Date() 在浏览器里实时取「当前时间」，而不是构建时写死

// 1) 当前日期：new Date() 创建一个「日期对象」，代表此刻（含年/月/日/星期/时分秒）
const today = new Date();

// 2) 自定义函数：把日期对象格式化成中文「星期X」字符串
function formatDate(date: Date) {
  // Intl.DateTimeFormat 是 JS 内置的「国际化日期格式化」工具
  return new Intl.DateTimeFormat(
    'zh-CN',                 // 区域：中文/中国（决定语言）
    { weekday: 'long' }      // 只要「星期几」，且用完整写法（long → 星期三）
  ).format(date);            // 真正执行格式化，返回如 "星期三" 的字符串
}

export default function TodoList() {
  // 3) 重点：{formatDate(today)} —— 花括号里可以写任意 JS 表达式（这里是函数调用）
  return (
    <h1 className="text-2xl font-bold text-gray-800">
      To Do List for {formatDate(today)}
    </h1>
  );
}
