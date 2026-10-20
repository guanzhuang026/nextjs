import { Avatar, type Person } from "@/components/Avatar";

// Profile 和 Avatar 共用的 props 类型
type ProfileProps = {
  person: Person;
  size: number;
  isSepia?: boolean;
  thickBorder?: boolean;
};

// 写法 A：把每个 prop 显式列出来传给 Avatar（清晰但啰嗦）
export function ProfileVerbose({
  person,
  size,
  isSepia,
  thickBorder,
}: ProfileProps) {
  return (
    <div className="card rounded-lg border border-gray-200 p-4">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

// 写法 B：用展开语法 {...props} 把收到的所有 props 一次性转发给 Avatar（简洁）
// 等价于写法 A，但不用逐个列出每个 prop 的名字
export function ProfileSpread(props: ProfileProps) {
  return (
    <div className="card rounded-lg border border-gray-200 p-4">
      <Avatar {...props} />
    </div>
  );
}
