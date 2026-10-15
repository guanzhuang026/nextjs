// 这个文件专门演示「具名导出：一个文件导出多个零件」。
//
// 关键看下面：同一个文件里用多个 export 关键字，就能对外提供多个东西。
// 别的文件可以一次性具名导入：import { Avatar, Tag, BRAND } from '@/components/Parts'
//
// 对比：
//   - 默认导出一个文件只能有 1 个（export default）
//   - 具名导出一个文件可以有任意多个（每行一个 export）

// 具名导出 1：头像组件
export function Avatar(props: { src: string; name: string }) {
  return (
    <img
      className="h-20 w-20 rounded-full object-cover shadow"
      src={props.src}
      alt={props.name}
    />
  );
}

// 具名导出 2：标签徽章组件
export function Tag(props: { label: string }) {
  return (
    <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-700">
      {props.label}
    </span>
  );
}

// 具名导出 3：常量（普通的 JS 值也能具名导出）
export const BRAND = "我的 React 练习项目";
