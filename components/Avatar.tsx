import { getImageUrl } from "@/lib/utils";

// 给 person 定义类型（TS 需要）：有 name 和 imageId 两个字段。
// 用 export 导出，方便别的文件复用这个类型。
export type Person = {
  name: string;
  imageId: string;
};

// 子组件 Avatar：通过「参数解构」读取父组件传来的 props
// 新增 isSepia / thickBorder 两个可选 prop，用来演示「转发」
export function Avatar({
  person,
  size,
  isSepia = false,
  thickBorder = false,
}: {
  person: Person;
  size: number;
  isSepia?: boolean;
  thickBorder?: boolean;
}) {
  // 根据 props 拼出 className：sepia=棕褐色滤镜，thickBorder=加粗边框
  const className = [
    "avatar rounded-full shadow",
    isSepia ? "sepia" : "",
    thickBorder ? "border-4 border-gray-800" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <img
      className={className}
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
